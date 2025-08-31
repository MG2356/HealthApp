import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OrdersScreen = () => {
  const orders = [
    { id: 1, title: "Order #1234", status: "Shipped", date: "2025-08-31" },
    { id: 2, title: "Order #5678", status: "Processing", date: "2025-08-30" },
    { id: 3, title: "Order #9101", status: "Delivered", date: "2025-08-28" },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.headerText}>Your Orders</Text>
        <Ionicons name="notifications-outline" size={28} color="#333" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {orders.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>You have no orders yet!</Text>
          </View>
        ) : (
          orders.map((order) => (
            <View key={order.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{order.title}</Text>
                <Text style={[styles.status, order.status === "Delivered" ? styles.delivered : styles.processing]}>
                  {order.status}
                </Text>
              </View>
              <Text style={styles.cardText}>Order Date: {order.date}</Text>
              <TouchableOpacity style={styles.orderBtn}>
                <Text style={styles.orderBtnText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f8" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
    marginTop: 30, 
  },
  headerText: { fontSize: 22, fontWeight: "bold", color: "#333" },

  scrollContent: { padding: 15, paddingTop: 30 }, 

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  status: { fontSize: 12, fontWeight: "600", paddingVertical: 2, paddingHorizontal: 8, borderRadius: 12, overflow: "hidden", color: "#fff" },
  delivered: { backgroundColor: "#4CAF50" },
  processing: { backgroundColor: "#FF9800" },
  cardText: { fontSize: 14, color: "#666" },
  orderBtn: { marginTop: 10, backgroundColor: "#1C82DF", paddingVertical: 8, borderRadius: 8, alignItems: "center" },
  orderBtnText: { color: "#fff", fontWeight: "bold" },

  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 },
  emptyText: { fontSize: 16, color: "#999" },
});

export default OrdersScreen;
