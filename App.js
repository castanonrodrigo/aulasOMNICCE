import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import * as screen from "./src/constants/dimensions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: screen.height * 0.3,
    width: screen.width * 0.3,
    backgroundColor: "red",
  },
});
