import React, { useState } from "react";
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
import StatisticsScreen from "./StatisticsScreen";

export default function App() {
  return <StatisticsScreen />;
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
