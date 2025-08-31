import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PrescriptionScreen = () => {
  return (
    <View style={styles.container}>
       <Image
       source={require("../assets/file1.gif")}
      />

      <Text style={styles.title}>No Prescriptions Yet</Text>

      <Text style={styles.subtitle}>
        You haven’t uploaded any prescriptions. Upload one to get started.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => alert("Upload feature coming soon!")}>
        <Text style={styles.buttonText}>Upload Prescription</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrescriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    tintColor: "#4A90E2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
