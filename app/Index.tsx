import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeStackNavigation from "./HomeStackNavigation";
import SavedBlogsScreen from "./src/screens/SavedBlogsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { Provider } from "react-redux";
import {createStore} from "./src/redux/reducers"
import React from "react";

const AppTab = createBottomTabNavigator();

export default function Index() {
  const store = createStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppTab.Navigator screenOptions={{ headerShown: false }}>
          <AppTab.Screen name="Home" component={HomeStackNavigation} />
          <AppTab.Screen name="Saved" component={SavedBlogsScreen} />
          <AppTab.Screen name="Profile" component={ProfileScreen} />
        </AppTab.Navigator>
      </Provider>
    </SafeAreaView>
  );
}
