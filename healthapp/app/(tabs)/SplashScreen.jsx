import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={require("./react-logo.png")} style={styles.logo} /> */}
      <Text style={styles.text}>Welcome to My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#007AFF" },
  logo: { width: 120, height: 120, marginBottom: 20 },
  text: { color: "white", fontSize: 20, fontWeight: "bold" },
});

export default SplashScreen;
