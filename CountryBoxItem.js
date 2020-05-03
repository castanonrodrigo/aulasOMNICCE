import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as screen from "./src/constants/dimensions";

export default function CountryBoxItem() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleLabel}>Brazil</Text>
          <Text style={styles.titleLabel}>BR</Text>
        </View>
        <Text>Novos casos confirmados: 0</Text>
        <Text>Total de casos confirmados: 0</Text>
        <Text>Novas mortes: 0</Text>
        <Text>Total mortes: 0</Text>
        <Text>Novos recuperados: 0</Text>
        <Text>Total de recuperados: 0</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#75FFAF",
    borderWidth: 1,
    alignSelf: "center",
    padding: screen.width * 0.02,
    borderRadius: 10,
    width: screen.width * 0.9,
    margin: screen.height * 0.02,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleLabel: {
    fontWeight: "bold",
  },
});
