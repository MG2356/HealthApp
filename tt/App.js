import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import OrdersScreen from "./OrdersScreen";
import PrescriptionScreen from "./PrescriptionScreen";
import ChatScreen from "./ChatScreen";
import MGScreen from "./MGScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
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

  if (loading) return null; // you can return <SplashScreen /> if needed

  return (
    <NavigationContainer>
      

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Always show splash first */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        {userToken ? (
          // If logged in → show bottom tabs
          <Stack.Screen name="MainApp" component={BottomTabs} />
        ) : (
          // Else show login/register
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MGscreen" component={MGScreen} />
                  <Stack.Screen name="MainApp" component={BottomTabs} />


            {/* <Stack.Screen name="MainApp" component={BottomTabs} /> */}

          </>
        )}
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}
