import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text
} from "react-native";
import * as screen from "../constants/dimensions";

export default function LoginScreen(props) {
  const [userName, setUserName] = useState("");

  const handleChangeText = (newText) => {
    setUserName(newText);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/covidTitle.png")}
          style={styles.titleImage}
          resizeMode={"contain"}
        />
      </View>
      <View>
        <Image
          source={require("../assets/images/corona-doctor.gif")}
          style={styles.gifImage}
          resizeMode={"cover"}
        />
      </View>
      <KeyboardAvoidingView behavior={"position"}>
        <TextInput
          style={styles.userNameInput}
          placeholder={"@USUÁRIO"}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={userName}
          onChangeText={handleChangeText}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => console.log(props.navigation.navigate("Exemplo"))}
      >
        <Text style={styles.submitButtonText}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: screen.height * 0.08,
    alignItems: "flex-end",
  },
  titleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
  gifImage: {
    width: screen.width * 1,
    height: screen.height * 0.45,
  },
  userNameInput: {
    width: screen.width * 0.9,
    height: screen.height * 0.05,
    alignSelf: "center",
    marginVertical: screen.height * 0.03,
    backgroundColor: "#F5F5F5",
    borderRadius: screen.width * 0.02,
    color: "#333",
    fontSize: screen.height * 0.025,
    paddingHorizontal: screen.width * 0.03,
  },
  submitButton: {
    width: screen.width * 0.2,
    height: screen.height * 0.06,
    backgroundColor: "#75FFAF",
    alignSelf: "center",
    borderRadius: screen.width * 0.02,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: screen.width * 0.04,
  },
});
