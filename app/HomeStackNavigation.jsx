import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import BlogDetailScreen from "./src/screens/BlogDetailScreen";
const AppStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Main" component={MainScreen} />
      <AppStack.Screen name="BlogDetailScreen" component={BlogDetailScreen} />
    </AppStack.Navigator>
  );
};

export default HomeStackNavigation;
