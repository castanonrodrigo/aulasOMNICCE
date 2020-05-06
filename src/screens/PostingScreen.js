import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { height, width } from "../constants/dimensions";

// import { Container } from './styles';

const PostingScreen = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.titleInput}
          placeholder="Título da sua publicação"
        />
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          placeholder="O que está acontecendo na sua quarentena?"
          multiline
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleInput: {
    height: height * 0.07,
    borderColor: "#39cb7f",
    backgroundColor: "#dadada",
    borderWidth: 2,
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    padding: 5,
  },
  textInput: {
    borderColor: "#39cb7f",
    backgroundColor: "#dadada",
    borderWidth: 2,
    borderRadius: 10,
    height: height * 0.3,
    marginTop: height * 0.01,
    width: width * 0.9,
    alignSelf: "center",
    fontSize: 20,
    padding: 5,
  },
});

export default PostingScreen;
