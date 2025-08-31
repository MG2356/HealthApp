import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SplashScreen from "./Component/SplashScreen";
import LoginScreen from "./Authentication/LoginScreen";
import RegisterScreen from "./Authentication/RegisterScreen";
import HomeScreen from "./Component/HomeScreen";
import OrdersScreen from "./Component/OrdersScreen";
import PrescriptionScreen from "./Component/PrescriptionScreen";
import ChatScreen from "./Component/ChatScreen";
import OtpScreen from "./Authentication/OtpScreen";
import ProfileScreen from "./Component/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 1,
          borderColor: "#eee",
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Orders")
            iconName = focused ? "receipt" : "receipt-outline";
          else if (route.name === "Prescription")
            iconName = focused ? "document-text" : "document-text-outline";
          else if (route.name === "Chat")
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          else if (route.name === "Profile")
            iconName = focused ? "person-circle" : "person-circle-outline"; 
          return (
            <Ionicons
              name={iconName}
              size={26}
              color={focused ? "#47C2C4" : "#3B3B3B"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Prescription" component={PrescriptionScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setLoading(false);
    };
    checkLogin();
  }, []);

  if (loading) return null; 

  return (
    <NavigationContainer>


      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {userToken ? (
          <Stack.Screen name="MainApp" component={BottomTabs} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainApp" component={BottomTabs} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />

          </>
        )}
      </Stack.Navigator>


    </NavigationContainer>
  );
}
