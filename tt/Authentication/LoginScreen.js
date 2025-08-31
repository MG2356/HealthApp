import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Loader from "../Component/Loader"; // ✅ import loader

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://10.0.2.2:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Full Server Response:", data);

      if (response.ok) {
        Alert.alert("OTP Sent", "Please check your email for the OTP");
        navigation.replace("OtpScreen", { email });
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      Alert.alert("Error", "Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Loader */}
      <Loader visible={loading} />
{!loading && <>
      <Text style={styles.headerText}>LOGIN</Text>
      <Text style={styles.logoText}>Healthcare</Text>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Id"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password !</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don’t Have an Account ?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Register")}
        >
          Click here to register
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Logging in..." : "LOGIN"}
        </Text>
      </TouchableOpacity>
      </>
}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", justifyContent: "center", padding: 20 },
  headerText: { fontSize: 16, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  logoText: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 40 },
  inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#aaa", borderRadius: 10, paddingHorizontal: 10, marginBottom: 15 },
  icon: { marginRight: 8, color: "#333" },
  input: { flex: 1, height: 45 },
  forgotText: { color: "blue", textAlign: "right", marginBottom: 20 },
  registerText: { textAlign: "center", marginBottom: 30 },
  registerLink: { color: "blue", fontWeight: "bold" },
  button: { backgroundColor: "#4A90E2", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
