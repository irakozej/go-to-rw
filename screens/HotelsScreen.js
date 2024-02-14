import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HotelsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/hotel_image.jpg")}
        style={styles.image}
      />
      <Text>Hotels in Rwanda</Text>
      {/* Add information about hotels here */}
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

export default HotelsScreen;
