import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { width, height } from "../constants/dimensions";
// import { Container } from './styles';

const Post = ({ data }) => {
  const usuario = data.usuario;
  const titulo = data.titulo;
  const texto = data.texto;
  const imagem = data.imagem;
  return (
    <View style={styles.container}>
      <Text>{usuario}</Text>
      <Text>{titulo}</Text>
      <Text>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.5,
    padding: width * 0.03,
  },
});

export default Post;
