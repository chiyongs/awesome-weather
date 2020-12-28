import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1c40f",
    justifyContent: "flex-end",
    paddingVertical: 100,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
    color: "#2c2c2c",
  },
});
