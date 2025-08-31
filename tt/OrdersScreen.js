import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const OrdersScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>📦 Your Orders</Text>
        {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={26} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="receipt-outline" size={26} color="#444" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="document-text-outline" size={26} color="#444" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={26} color="#444" />
        </TouchableOpacity>
      </View> */}
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
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
export default OrdersScreen;
