import React, { useEffect, useState } from "react";
import { AsyncStorage, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import StatsScreen from "./screens/StatsScreen";
import FeedScreen from "./screens/FeedScreen";
import PostingScreen from "./screens/PostingScreen";
import CommentScreen from "./screens/CommentScreen";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoggedInFlow({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mainFeed"
        component={Tabflow}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="comments"
        component={CommentScreen}
        options={{
          headerTitle: false,
          headerTintColor: "#75ffaf",
        }}
      />
      <Stack.Screen
        name="posting"
        component={PostingScreen}
        options={{
          headerTitleAlign: "center",
          title: "Criar Publicação",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 24,
                width: 24,
                marginVertical: 3,
                marginHorizontal: 11,
              }}
            >
              <MaterialIcons name="arrow-back" size={24} color="#75ffaf" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Tabflow() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16 },
        activeTintColor: "#75ffaf",
      }}
    >
      <Tab.Screen
        name="feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={30}
              color={focused ? "#75ffaf" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="stats"
        component={StatsScreen}
        options={{
          tabBarLabel: "Estatísticas",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="line-graph"
              size={30}
              color={focused ? "#75ffaf" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function () {
  const [hasToken, setHasToken] = useState(null);
  const [loadingToken, setLoadingToken] = useState(true);

  async function tryLocalLoginIn() {
    try {
      const asyncUser = await AsyncStorage.getItem("user");
      asyncUser === null ? setHasToken(false) : setHasToken(true);
    } catch (e) {
      console.log(e);
      setHasToken(false);
    } finally {
      setLoadingToken(false);
    }
  }

  useEffect(() => {
    tryLocalLoginIn();
  }, []);

  if (loadingToken) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={hasToken ? "Logged" : "Login"}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Logged" component={LoggedInFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
