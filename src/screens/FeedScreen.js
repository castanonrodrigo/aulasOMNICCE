import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  AsyncStorage,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import api from "../services/api";
import Post from "../components/Post";
import FeedHeader from "../components/FeedHeader";
import { width, height } from "../constants/dimensions";

export default function FeedScreen({
  navigation: { navigate },
  navigation,
  route,
}) {
  const [posts, setPosts] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [postCount, setPostCount] = useState(null);

  async function loadPosts() {
    setLoadingPosts(true);
    try {
      const response = await api.get("/postagens/");
      setPosts(response.data.reverse());
      setPostCount(response.data.length);
    } catch (e) {
      console.log(e);
      alert("Não conseguimos pegar os dados da API");
    } finally {
      setLoadingPosts(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (route.params?.newPost) {
      setPosts([route.params?.newPost, ...posts]);
    }
  }, [route.params?.newPost]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     loadPosts();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

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
    <SafeAreaView style={styles.container}>
      {loadingPosts ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          ListHeaderComponent={
            <FeedHeader navigate={navigate} count={postCount} />
          }
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Post data={item} />}
        />
      )}

      <TouchableOpacity style={styles.reloadButton} onPress={() => loadPosts()}>
        <MaterialCommunityIcons
          name="reload"
          size={width * 0.07}
          color="#FFFFFF"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => Logout()}>
        <MaterialCommunityIcons
          name="logout"
          size={width * 0.07}
          color="#FFFFFF"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: height * 0.08,
  },
  reloadButton: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.01,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: "#75FFAF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    position: "absolute",
    top: height * 0.05,
    right: width * 0.01,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: "#75FFAF",
    alignItems: "center",
    justifyContent: "center",
  },
});
