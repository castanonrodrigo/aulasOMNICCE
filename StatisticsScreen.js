import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import * as screen from "./src//constants/dimensions";

import CountryBoxItem from "./CountryBoxItem";

export default function StatisticsScreen() {
  const countryName = [{ country: "Brazil" }, { country: "Israel" }];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./src/assets/images/covidTitle_small.png")}
          style={styles.headerTitle}
          resizeMode={"contain"}
        />
      </View>
      <FlatList
        data={countryName}
        keyExtractor={(item) => item.country}
        renderItem={CountryBoxItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: screen.width * 0.05,
    marginTop: screen.height * 0.06,
  },
  headerTitle: {
    width: screen.width * 0.8,
    height: screen.height * 0.1,
  },
});
