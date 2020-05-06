import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { height, width } from "../constants/dimensions";
import { Entypo } from "@expo/vector-icons";

const PostingScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerPostButton}>
          <Text style={styles.headerPostButtonText}>POSTAR</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => console.log("Imagem adicionada")}
        >
          <Entypo name="image" size={24} color="#FFFFFF" />
          <Text style={styles.imageButtonText}>Adicionar Imagem</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPostButton: {
    backgroundColor: "#75FFAF",
    width: width * 0.2,
    height: height * 0.05,
    borderRadius: width * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerPostButtonText: {
    color: "#FFFFFF",
    fontSize: height * 0.023,
    fontWeight: "bold",
  },
  titleInput: {
    height: height * 0.07,
    borderColor: "#75FFAF",
    backgroundColor: "#E8E8E8",
    color: "#dadada",
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    borderColor: "#75FFAF",
    backgroundColor: "#E8E8E8",
    color: "#dadada",
    borderWidth: 1,
    borderRadius: 10,
    height: height * 0.3,
    marginTop: height * 0.01,
    width: width * 0.9,
    alignSelf: "center",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  imageButton: {
    flexDirection: "row",
    backgroundColor: "#75FFAF",
    height: height * 0.08,
    width: width * 0.45,
    marginTop: height * 0.05,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width * 0.1,
    justifyContent: "space-around",
  },
  imageButtonText: {
    color: "#FFFFFF",
    fontSize: height * 0.023,
    fontWeight: "bold",
  },
});

export default PostingScreen;
