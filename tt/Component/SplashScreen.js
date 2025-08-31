import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setTimeout(() => {
        if (token) {
          navigation.replace("MainApp"); 
        } else {
          navigation.replace("Login");   
        }
      }, 5000); 
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <></>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#5391B4" },
  logo: { width: 120, height: 120, marginBottom: 20 },
});

export default SplashScreen;
