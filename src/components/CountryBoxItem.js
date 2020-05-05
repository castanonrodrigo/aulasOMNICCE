import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as screen from "../constants/dimensions";

export default function CountryBoxItem({ countryData }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.label}>{countryData.Country}</Text>
        <Text style={styles.label}>{countryData.CountryCode}</Text>
      </View>
      <Text>Novos casos confirmados: {countryData.NewConfirmed}</Text>
      <Text>Total de casos confirmados: {countryData.TotalConfirmed}</Text>
      <Text>Novas mortes: {countryData.NewDeaths}</Text>
      <Text>Total mortes: {countryData.TotalDeaths}</Text>
      <Text>Novos recuperados: {countryData.NewRecovered}</Text>
      <Text>Total de recuperados: {countryData.TotalRecovered}</Text>
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
