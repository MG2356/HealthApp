import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

export default function ChatScreen() {
  const [city, setCity] = useState("Fetching location...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setCity("Location denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      let [address] = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      if (address?.city) setCity(address.city);
      else if (address?.region) setCity(address.region);
      else setCity("Unknown");
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Location Bar */}
        <View style={styles.header}>
          <Ionicons name="location-outline" size={20} color="#007AFF" />
          <Text style={styles.location}>{city}</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Section Title */}
          <Text style={styles.sectionTitle}>Pharmacy Nearby</Text>

          {/* Pharmacy Cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 10 }}
          >
            <View style={styles.card}>
              <Image
               source={require("../assets/patient.jpg")}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Path lab pharmacy</Text>
                <Text style={styles.cardSub}>5km Away</Text>
                <Text style={styles.rating}>⭐ 4.5 (120 reviews)</Text>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                source={require("../assets/pharmacy.png")}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>24 pharmacy</Text>
                <Text style={styles.cardSub}>5km Away</Text>
                <Text style={styles.rating}>⭐ 4.5 (120 reviews)</Text>
              </View>
            </View>
             <View style={styles.card}>
              <Image
                source={require("../assets/pharmacy.png")}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Path lab pharmacy</Text>
                <Text style={styles.cardSub}>5km Away</Text>
                <Text style={styles.rating}>⭐ 4.5 (120 reviews)</Text>
              </View>
            </View>
             <View style={styles.card}>
              <Image
                source={require("../assets/pharmacy.png")}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>24 pharmacy</Text>
                <Text style={styles.cardSub}>5km Away</Text>
                <Text style={styles.rating}>⭐ 4.5 (120 reviews)</Text>
              </View>
            </View>
          </ScrollView>

          {/* Upload Section */}
          <Text style={styles.uploadTitle}>Upload Prescription</Text>
          <Text style={styles.uploadDesc}>
            We will show the pharmacy that fits as per your prescription.
          </Text>

          <View style={[styles.uploadRow, {    padding:7, borderRadius: 12,borderColor:"#000000",borderWidth:1 }]}>
              <TouchableOpacity style={styles.uploadBox}>
                <Image source={require("../assets/file1.gif")}  resizeMode="contain" />
              <Text style={styles.uploadText}>Upload File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadBox}>
                <Image source={require("../assets/upload.gif")}  resizeMode="contain" />
              <Text style={styles.uploadText}>Upload Link</Text>
            </TouchableOpacity>

          
          </View>

          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10, 
    marginBottom: 16,
  },
  location: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 6 },

  card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 100 },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 14, fontWeight: "700", color: "#222" },
  cardSub: { fontSize: 12, color: "#777", marginTop: 2 },
  rating: { fontSize: 12, color: "#444", marginTop: 4 },

  uploadTitle: { fontSize: 18, fontWeight: "700", marginTop: 20 },
  uploadDesc: { fontSize: 14, color: "#666", marginVertical: 6 },

  uploadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  uploadBox: {
    width: "48%",
    height: 110,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  uploadText: { marginTop: 6, fontSize: 14, fontWeight: "500", color: "#333" },

  continueBtn: {
    marginTop: 25,
    backgroundColor: "#41B592",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  continueText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
