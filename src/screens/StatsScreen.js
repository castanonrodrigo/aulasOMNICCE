import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
} from "react-native";

import * as screen from "../constants/dimensions";
import CountryBoxItem from "../components/CountryBoxItem";

export default function Stats() {
  const countryName = [{ country: "Brazil" }, { country: "Israel" }];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/covidTitle_small.png")}
          style={styles.headerTitle}
          resizeMode={"contain"}
        />
      </View>
      <FlatList
        data={countryName}
        renderItem={CountryBoxItem}
        keyExtractor={(item) => item.country}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: screen.height * 0.06,
    paddingHorizontal: screen.width * 0.04,
  },
  headerTitle: {
    width: screen.width * 0.8,
    height: screen.height * 0.1,
  },
});
