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
      <View style={styles.gifContainer}>
        <Image
          source={require("./src/assets/images/corona-doctor.gif")}
          style={styles.gifImage}
          resizeMode="cover"
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
    // height: screen.height * 0.3,
    width: screen.width * 1,
    // backgroundColor: "red",
    alignItems: "flex-end",
    marginTop: screen.height * 0.08,
  },
  titleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
  gifContainer: {
    // height: 200,
  },
  gifImage: {
    width: screen.width * 1,
    height: screen.height * 0.45,
  },
});
