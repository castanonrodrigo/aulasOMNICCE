import React from "react";
import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import { height, width } from "../constants/dimensions";

// import { Container } from './styles';

const PostingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Título da sua publicação"
      />
      <TextInput
        style={styles.textInput}
        placeholder="O que está acontecendo na sua quarentena?"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleInput: {
    height: height * 0.07,
    borderColor: "black",
    borderWidth: 5,
    width: width * 0.9,
    alignSelf: "center",
    marginTop: 10,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 5,
    height: height * 0.3,
    marginTop: height * 0.01,
    width: width * 0.9,
    alignSelf: "center",
  },
});

export default PostingScreen;
