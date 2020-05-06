import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { height, width } from "../constants/dimensions";
// import { Container } from './styles';

const FeedHeader = () => {
  return (
    <View style={StyleSheet.container}>
      <Image
        source={require("../assets/images/covidTitle_small.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          O que está acontecendo na sua quarentena?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width * 0.55,
    height: height * 0.05,
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#39cb7f",
    width: width * 0.9,
    height: height * 0.1,
    justifyContent: "center",
  },
  text: {
    color: "gray",
    fontSize: 22,
    textAlign: "center",
  },
});

export default FeedHeader;
