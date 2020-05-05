import React from "react";
import { View, Button, AsyncStorage } from "react-native";

export default function FeedScreen({ navigation: { navigate } }) {
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
