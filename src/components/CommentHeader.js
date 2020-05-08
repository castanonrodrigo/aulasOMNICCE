import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { width, height } from "../constants/dimensions";
import Post from "./Post";

export default function CommentHeader({ data }) {
  return (
    <View style={{ marginBottom: height * 0.02 }}>
      <Text style={styles.commentTitle}>Publicação</Text>
      <Post data={data} onFeed={null} />
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
