import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TransportationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/transport_image.jpg")}
        style={styles.image}
      />
      <Text>Transportation in Rwanda</Text>
      {/* Add information about transportation here */}
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

export default TransportationScreen;
