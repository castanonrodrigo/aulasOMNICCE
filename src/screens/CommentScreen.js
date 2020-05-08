import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage,
  Keyboard,
  Alert,
} from "react-native";
import api from "../services/api";
import { width, height } from "../constants/dimensions";
import CommentHeader from "../components/CommentHeader";
import Comment from "../components/Comment";

export default function CommentScreen({ route }) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [commentsList, setCommentsList] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    loadUser();
    loadComments();
  }, []);
  const id = route.params.data.id;

  async function loadComments() {
    try {
      const response = await api.get(`/postagens/${id}/comentarios/`);
      setCommentsList(response.data.comentarios);
      setCount(response.data.comentarios.length);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadUser() {
    const response = await AsyncStorage.getItem("user");
    setUser(response);
  }

  const handleCommentSubmit = async () => {
    try {
      const newPost = {
        usuario: user,
        texto: comment,
        postagem: id,
      };
      const response = await api.post("/comentarios/", newPost);
      setCommentsList([...commentsList, response.data]);
    } catch (e) {
      Alert.alert("Seu comentário não foi postado :(");
    } finally {
      Keyboard.dismiss();
      setComment("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS == "ios" ? height * 0.1 : null}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={commentsList}
          keyExtractor={(comment) => String(comment.id)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <CommentHeader count={count} data={route.params.data} />
          }
          renderItem={({ item }) => <Comment data={item} />}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escreva seu comentário..."
            value={comment}
            onChangeText={(newComment) => setComment(newComment)}
            multiline
            fontSize={17}
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
    </KeyboardAvoidingView>
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
    height: height * 0.12,
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
    fontSize: 21,
  },
});
