import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";

import * as screen from "./src/constants/dimensions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./src/assets/images/covidTitle.png")}
          style={styles.titleImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.gifContainer}>
        <Image
          source={require("./src/assets/images/corona-doctor.gif")}
          style={styles.gifImage}
          resizeMode="cover"
        />
      </View>
      <KeyboardAvoidingView behavior="position">
        <TextInput
          style={styles.nameInput}
          placeholder="@USUÁRIO"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.enterButton}>
        <Text style={styles.enterButtonText}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    // height: screen.height * 0.3,
    width: screen.width * 1,
    // backgroundColor: "red",
    alignItems: "flex-end",
    marginTop: screen.height * 0.08,
  },
  titleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
  gifContainer: {
    // height: 200,
  },
  gifImage: {
    width: screen.width * 1,
    height: screen.height * 0.45,
  },
  nameInput: {
    // borderWidth: 1,
    width: screen.width * 0.9,
    height: screen.height * 0.05,
    alignSelf: "center",
    marginVertical: screen.height * 0.02,
    backgroundColor: "#F5F5F5",
    borderRadius: screen.width * 0.02,
    color: "#333",
    fontSize: screen.height * 0.025,
    paddingHorizontal: screen.width * 0.03,
  },
  enterButton: {
    width: screen.width * 0.2,
    height: screen.height * 0.06,
    backgroundColor: "#75FFAF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screen.width * 0.02,
    marginVertical: screen.height * 0.02,
  },
  enterButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: screen.width * 0.04,
  },
});
