import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/home/HomeScreen";
import ChatScreen from "../screens/chat/ChatScreen";
import FarmScreen from "../screens/farm/FarmScreen";
import MarketScreen from "../screens/market/MarketScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

import theme from "../constants/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Chat") {
          iconName = focused ? "chatbubbles" : "chatbubbles-outline";
        } else if (route.name === "My Farm") {
          iconName = focused ? "leaf" : "leaf-outline";
        } else if (route.name === "Market") {
          iconName = focused ? "stats-chart" : "stats-chart-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName as string} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.brand,
      tabBarInactiveTintColor: theme.colors.tertiary,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.border,
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="My Farm" component={FarmScreen} />
    <Tab.Screen name="Market" component={MarketScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={MainTabs} />
    {/* Add other stack screens here, e.g., Onboarding, Details */}
  </Stack.Navigator>
);

export default AppNavigator;
