import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { height, width } from "../constants/dimensions";
import { Entypo } from "@expo/vector-icons";
import api from "../services/api";

const PostingScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  async function post() {
    const user = await AsyncStorage.getItem("user");
    if (image) {
      const form_data = new FormData();
      form_data.append("usuario", user);
      form_data.append("titulo", title);
      form_data.append("texto", text);
      form_data.append("imagem", {
        type: "image/jpg",
        uri: image,
        name: "userImage.jpg",
      });
      try {
        console.log(form_data);
        const response = await api.post("/postagens/", form_data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(response.data);
      } catch (error) {
        error.message;
      } finally {
        navigation.navigate("feed");
      }
    } else {
      const postData = {
        usuario: user,
        titulo: title,
        texto: text,
        imagem: null,
      };
      const jsonPostData = JSON.stringify(postData);
      try {
        const response = await api.post("/postagens/", jsonPostData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
      } catch (error) {
        alert("Algum erro ocorreu");
      } finally {
        navigation.navigate("feed");
      }
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerPostButton}
          onPress={() => post()}
        >
          <Text style={styles.headerPostButtonText}>POSTAR</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  async function chooseFromGallery() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        console.log(result);
        alert(image);
      }
    }
  }

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
          onPress={() => chooseFromGallery()}
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
    marginRight: width * 0.03,
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
    color: "black",
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
    color: "black",
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
