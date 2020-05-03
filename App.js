import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

import * as screen from "./src/constants/dimensions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./src/assets/images/covidTitle.png")}
          style={styles.titleImage}
          resizeMode="contain"
        />
      </View>
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
    width: screen.width * 1,
    backgroundColor: "red",
    alignItems: "flex-end",
    marginTop: screen.height * 0.1,
  },
  titleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
});
