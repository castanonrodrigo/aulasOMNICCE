import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { width, height } from "../constants/dimensions";
// import { Container } from './styles';

const Post = ({ data }) => {
  const { usuario, titulo, texto, imagem } = data;
  return (
    <View style={styles.container}>
      <Text>{usuario}</Text>
      <Text>{titulo}</Text>
      <Text>{texto}</Text>
      {imagem && (
        <Image
          style={styles.image}
          source={{ uri: `https://fluxofullstack.herokuapp.com${imagem}` }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dadada",
    marginTop: 10,
    width: width * 0.9,
    //height: height * 0.5,
    padding: width * 0.03,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Post;
