// App.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing screens
import ParksScreen from "./screens/ParksScreen";
import HotelsScreen from "./screens/HotelsScreen";
import TransportationScreen from "./screens/TransportationScreen";
import PricingScreen from "./screens/PricingScreen";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Render different screens here */}
      <ParksScreen />
      <HotelsScreen />
      <TransportationScreen />
      <PricingScreen />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
