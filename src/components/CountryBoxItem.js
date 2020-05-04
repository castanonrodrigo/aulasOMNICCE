import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as screen from "../constants/dimensions";

export default function CountryBoxItem() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.label}>Brazil</Text>
        <Text style={styles.label}>BR</Text>
      </View>
      <Text>Novos casos confirmados: 7502</Text>
      <Text>Total de casos confirmados: 87187</Text>
      <Text>Novas morte: 493</Text>
      <Text>Total mortes: 6006</Text>
      <Text>Novos recuperados: 1803</Text>
      <Text>Total de recuperados: 35935</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#75FFAF",
    borderWidth: 1,
    alignSelf: "center",
    padding: screen.width * 0.02,
    marginVertical: screen.height * 0.02,
    borderRadius: screen.width * 0.04,
    width: screen.width * 0.9,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
  },
});
