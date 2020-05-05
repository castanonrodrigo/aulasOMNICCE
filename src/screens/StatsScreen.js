import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
} from "react-native";
import axios from "axios";

import * as screen from "../constants/dimensions";
import CountryBoxItem from "../components/CountryBoxItem";

export default function Stats() {
  const [results, setResults] = useState([]);
  // const countryName = [{ country: "Brazil" }, { country: "Israel" }];

  const getCovidData = async () => {
    try {
      const url = "https://api.covid19api.com/summary";
      const response = await axios.get(url);
      setResults(response.data.Countries);
    } catch (e) {
      alert("Não conseguimos pegar os dados...");
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

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
        data={results}
        renderItem={({ item }) => <CountryBoxItem countryData={item} />}
        keyExtractor={(item) => item.CountryCode}
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
