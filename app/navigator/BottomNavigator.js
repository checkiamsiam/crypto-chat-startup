import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
// import Profile from '../screens/Profile';
import Portfolio from "../screens/Portfolio";
import Profile from "../screens/Profile";
import Wallet from "../screens/Wallet";
import { Colors } from "../theme/color";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="home-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="md-wallet-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="chatbubbles-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? Colors.primary : Colors.disable}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
