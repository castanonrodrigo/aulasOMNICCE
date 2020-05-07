import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { width, height } from "../constants/dimensions";

export default function CommentHeader() {
  return (
    <View style={{ marginBottom: height * 0.02 }}>
      <Text style={styles.commentTitle}>Publicação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  commentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: height * 0.05,
    alignSelf: "center",
    color: "#39cb7f",
  },
});
