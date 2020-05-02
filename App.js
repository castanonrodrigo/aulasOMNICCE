import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

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
    paddingTop: 30,
  },
  header: {
    flexDirection: "row-reverse",
    width: "100%",
    height: 200,
    backgroundColor: "blue",
    marginVertical: 20,
  },
  title: {
    width: 200,
    height: 200,
    backgroundColor: "yellow",
  },
});
