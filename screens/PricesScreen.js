import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PricesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Prices in Rwanda</Text>
      {/* Add price information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PricesScreen;
