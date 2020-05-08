import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { width, height } from "../constants/dimensions";

const Post = ({ data, onFeed, count }) => {
  const { usuario, titulo, texto, imagem } = data;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.user}>{usuario} </Text>
        {!onFeed && (
          <Text style={[styles.user, { fontWeight: "normal" }]}>
            {count === 1 ? `- ${count} comentário` : `- ${count} comentários`}
          </Text>
        )}
      </View>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.text}>{texto}</Text>
      {imagem && (
        <Image
          style={styles.image}
          source={{ uri: `https://fluxofullstack.herokuapp.com${imagem}` }}
        />
      )}
      {onFeed && (
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => navigation.navigate("comments", { data: data })}
        >
          <MaterialCommunityIcons
            name="comment-text-multiple-outline"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dadada",
    marginTop: 20,
    width: width * 0.9,
    padding: width * 0.03,
    borderRadius: 3,
  },
  user: {
    color: "#39cb7f",
    fontWeight: "bold",
    fontSize: 19,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: height * 0.02,
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: height * 0.01,
  },
  image: {
    marginTop: height * 0.03,
    width: "100%",
    height: width * 0.8,
    borderRadius: 5,
    backgroundColor: "black",
  },
  commentButton: {
    position: "absolute",
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: "#75FFAF",
    marginLeft: width * 0.7,
    top: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Post;
