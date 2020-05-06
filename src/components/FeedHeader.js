import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { height, width } from "../constants/dimensions";
// import { Container } from './styles';

const FeedHeader = ({ navigate, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/covidTitle_small.png")}
          style={styles.image}
          resizeMode="contain"
        />
        {count && (
          <Text style={styles.countText}>
            {count === 1 ? `${count} post` : `${count} posts`}
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("posting")}
      >
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
    marginTop: height * 0.02,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#39cb7f",
    alignSelf: "center",
  },
  image: {
    width: width * 0.5,
    height: height * 0.05,
  },
  button: {
    marginTop: height * 0.01,
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
