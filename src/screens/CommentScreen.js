import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { width, height } from "../constants/dimensions";

export default function CommentScreen() {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    alert("Botao clicado");
  };

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
        <TouchableOpacity
          style={styles.commentButtonContainer}
          onPress={handleCommentSubmit}
        >
          <Text style={styles.commentButtonText}>Comentar</Text>
        </TouchableOpacity>
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
    width: width * 0.65,
    height: height * 0.07,
    borderWidth: 2,
    borderColor: "#39cb7f",
    borderRadius: width * 0.3,
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.06,
    justifyContent: "center",
  },
  commentButtonContainer: {
    width: width * 0.25,
    height: height * 0.07,
    borderRadius: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#75FFAF",
  },
  commentButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: height * 0.032,
  },
});
