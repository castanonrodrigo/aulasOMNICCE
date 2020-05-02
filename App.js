import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "./src/constants/dimensions";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <View style={styles.title}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: screenHeight * 0.04,
  },
  header: {
    height: screenHeight * 0.3,
    flexDirection: "row-reverse",
    backgroundColor: "blue",
    marginVertical: screenHeight * 0.03,
  },
  title: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.2,
    backgroundColor: "yellow",
  },
});
