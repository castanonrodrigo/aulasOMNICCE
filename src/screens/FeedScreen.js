import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Button,
  AsyncStorage,
  FlatList,
  Text,
} from "react-native";
import api from "../services/api";
import Post from "../components/Post";
export default function FeedScreen({ navigation: { navigate } }) {
  const [posts, setPosts] = useState(null);

  async function loadPosts() {
    try {
      const response = await api.get("/postagens/");
      setPosts(response.data);
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
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Post data={item} />}
      />
      <Button title="LOGOUT" onPress={() => Logout()} />
    </SafeAreaView>
  );
}
