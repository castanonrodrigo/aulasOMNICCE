import React, { useEffect } from "react";
import { View, Button, AsyncStorage } from "react-native";
import api from "../services/api";

export default function FeedScreen({ navigation: { navigate } }) {
  async function loadPosts() {
    try {
      const response = await api.get("/postagens/");
      console.log("nossa data:", response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);

  async function Logout() {
    try {
      await AsyncStorage.removeItem("user");
    } catch (e) {
      console.log(e);
    } finally {
      navigate("Login");
    }
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="LOGOUT" onPress={() => Logout()} />
      <Button title="fazer um comentário" onPress={() => navigate("comment")} />
      <Button title="fazer um post" onPress={() => navigate("posting")} />
    </View>
  );
}
