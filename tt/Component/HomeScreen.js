import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.leftGroup}>
            <Ionicons name="menu" size={28} color="#000" />
            <Image source={require("../assets/preview.jpg")} style={styles.logo} />
          </View>
          <Ionicons name="mic" size={28} color="#000" />
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <View style={styles.featureRow}>
            <TouchableOpacity style={styles.featureBox}>
              <Image source={require("../assets/questions.png")} />
              <Text style={styles.featureText}>Questions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureBox}>
              <Image source={require("../assets/reminders.png")} />
              <Text style={styles.featureText}>Reminders</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featureRow}>
            <TouchableOpacity style={styles.featureBox}>
              <Image source={require("../assets/messageslink.png")} />
              <Text style={styles.featureText}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureBox}>
              <Image source={require("../assets/calender_image.png")} />
              <Text style={styles.featureText}>Calendar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card1}>
            <Text style={styles.cardTitle}>UPLOAD PRESCRIPTION</Text>
            <Text style={styles.cardText}>
              Upload a Prescription and Tell Us What you Need. We do the Rest. !
            </Text>
            <View style={styles.innerCard}>
              <Text style={styles.offerText}>Flat 25% OFF on Medicines</Text>
              <TouchableOpacity style={styles.orderBtn}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>ORDER NOW</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.card2, { backgroundColor: "#d6f5d6" }]}>
            <Text style={styles.cardTitle}>Get the Best Medical Service</Text>
            <Text style={styles.cardText}>
              Rem illum facere quo corporis Quis in saepe itaque ut quos pariatur. Qui numquam rerum.
            </Text>
            <Image
              source={require("../assets/doctor.png")}
              style={{
                width: 307,
                height: 151,
                top: -150,
                left: 150,
                angle: 0,
                opacity: 1
              }}
              resizeMode="contain"
            />
          </View>

          <View style={[styles.card2, { backgroundColor: "#e6e6ff" }]}>
            <Text style={[styles.cardTitle3]}>UPTO </Text>
            <Text style={[styles.cardTitle, { marginLeft: 32, marginTop: -8 }]}>80 % offer </Text>

            <Text style={[styles.cardText, { marginLeft: 34, fontWeight: "bold", fontsize: 16 }]}>On Health Products</Text>
            <TouchableOpacity style={styles.shopBtn}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>SHOP NOW</Text>
            </TouchableOpacity>
            <Image
              source={require("../assets/vitamins.png")}
              style={{
                width: 307,
                height: 91,
                top: -130,
                left: 150,
                angle: 0,
                opacity: 1
              }}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,

  },
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",

  },
  leftGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: { width: 100, height: 30, resizeMode: "contain", marginLeft: 10 },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  featureBox: {
    display: "flex",
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  featureText: { marginTop: 5, fontSize: 14, fontWeight: "500" },

  card1: {
    backgroundColor: "#f8f8f8",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },

  card2: {
    backgroundColor: "#f8f8f8",
    top: 10,
    height: 200,
    width: 380,
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  cardTitle:
  {
    fontWeight: 700,
    leadingtrim: "NONE",
    lineheight: 100,
    letterspacing: 0,
    width: 260,
    fontFamily: "Baloo Thambi 2",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  cardTitle3:
  {
    fontWeight: 700,
    leadingtrim: "NONE",
    lineheight: 100,
    letterspacing: 0,
    width: 260,
    fontFamily: "Baloo Thambi 2",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    height: 190,
    position: "absolute",
    left: -180,
    top: 50,
    opacity: 1,
    transform: [{ rotate: '90.74deg' }],


  },




  cardText:
  {
    fontSize: 13,
    width: 255,
    height: 78,
    top: 1,
    left: 1,
    angle: 0,
    opacity: 1,
    fontfamily: "Baloo Thambi 2",
    fontweight: 700,
    fontstyle: "bold",
    fontsize: 12,
    leadingtrim: "NONE",
    lineheight: 100,
    letterspacing: 0,
    textalign: "justify",

    color: "#3A3A3A"
  },
  offerText: { fontSize: 16, fontWeight: "600", marginVertical: 5 },

  innerCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  orderBtn: {
    backgroundColor: "#1C82DF",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  shopBtn: {
    backgroundColor: "#1C82DF",
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-start",
  },
});

export default HomeScreen;
