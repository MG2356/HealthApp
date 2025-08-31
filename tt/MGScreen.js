import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MGScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MG Screen 🎉</Text>
    </View>
  );
};

export default MGScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
