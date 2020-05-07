import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";

import { width, height } from "../constants/dimensions";

export default function CommentScreen() {
  const [comment, setComment] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva seu comentário..."
          value={comment}
          onChangeText={(newComment) => setComment(newComment)}
          multiline
          fontSize={15}
          autoCorrect={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E8E8E8",
    paddingLeft: width * 0.04,
    paddingRight: width * 0.02,
    width: width,
    height: height * 0.15,
    borderTopWidth: width * 0.002,
    borderBottomWidth: width * 0.002,
    borderColor: "rgb(56,68,77)",
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: width * 0.7,
    borderWidth: 1,
    borderColor: "#39cb7f",
    borderRadius: width * 0.3,
    paddingVertical: height * 0.006,
    paddingHorizontal: width * 0.04,
    justifyContent: "center",
  },
});
