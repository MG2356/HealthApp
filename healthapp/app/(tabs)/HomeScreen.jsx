import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="menu" size={28} color="#000" />
        {/* <Image source={require("./assets/logo.png")} style={styles.logo} /> */}
        <Ionicons name="mic" size={28} color="#000" />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Feature Buttons */}
        <View style={styles.featureRow}>
          <TouchableOpacity style={styles.featureBox}>
            <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Questions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureBox}>
            <MaterialIcons name="notifications-none" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Reminders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featureRow}>
          <TouchableOpacity style={styles.featureBox}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureBox}>
            <Ionicons name="calendar-outline" size={24} color="#007AFF" />
            <Text style={styles.featureText}>Calendar</Text>
          </TouchableOpacity>
        </View>

        {/* Upload Prescription */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>UPLOAD PRESCRIPTION</Text>
          <Text style={styles.cardText}>
            Upload a Prescription and Tell Us What you Need. We do the Rest. !
          </Text>
          <Text style={styles.offerText}>Flat 25% OFF on Medicines</Text>
          <TouchableOpacity style={styles.orderBtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>ORDER NOW</Text>
          </TouchableOpacity>
        </View>

        {/* Medical Service */}
        <View style={[styles.card, { backgroundColor: "#d6f5d6" }]}>
          <Text style={styles.cardTitle}>Get the Best Medical Service</Text>
          <Text style={styles.cardText}>
            Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur.
          </Text>
          {/* <Image
            source={require("./assets/doctor.png")}
            style={{ width: 80, height: 80, alignSelf: "flex-end" }}
            resizeMode="contain"
          /> */}
        </View>

        {/* Health Products */}
        <View style={[styles.card, { backgroundColor: "#e6e6ff" }]}>
          <Text style={[styles.cardTitle, { fontSize: 20 }]}>UPTO 80% offer</Text>
          <Text style={styles.cardText}>On Health Products</Text>
          <TouchableOpacity style={styles.shopBtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>SHOP NOW</Text>
          </TouchableOpacity>
          {/* <Image
            source={require("./assets/vitamins.png")}
            style={{ width: 100, height: 80, alignSelf: "flex-end" }}
            resizeMode="contain"
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  logo: { width: 100, height: 30, resizeMode: "contain" },
  featureRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  featureBox: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    alignItems: "center",
  },
  featureText: { marginTop: 5, fontSize: 14, fontWeight: "500" },
  card: {
    backgroundColor: "#f8f8f8",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  cardText: { fontSize: 13, color: "#444" },
  offerText: { fontSize: 14, fontWeight: "600", marginVertical: 5 },
  orderBtn: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  shopBtn: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
});

export default HomeScreen;
