import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ParksScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/park_image.jpg")} style={styles.image} />
      <Text>Parks in Rwanda</Text>
      {/* Add information about parks here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ParksScreen;
