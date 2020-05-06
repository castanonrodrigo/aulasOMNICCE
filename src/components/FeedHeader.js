import React from "react";
import { View, StyleSheet, Image } from "react-native";
// import { Container } from './styles';

const FeedHeader = () => {
  return (
    <View style={StyleSheet.container}>
      <Image
        source={require("../assets/images/covidTitle_small.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 100,
  },
});

export default FeedHeader;
