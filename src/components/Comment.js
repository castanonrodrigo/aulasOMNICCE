import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "../constants/dimensions";
// import { Container } from './styles';

const Comment = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{data.usuario}</Text>
      <Text style={styles.text}>{data.texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.014,
    paddingLeft: width * 0.01,
    borderBottomColor: "gray",
    borderBottomWidth: height * 0.001,
    height: height * 0.09,
    marginTop: 5,
  },
  user: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#39cb7f",
  },
  text: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: "justify",
  },
});

export default Comment;
