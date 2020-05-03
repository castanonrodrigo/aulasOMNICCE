import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen'
import StatsScreen from './screens/StatsScreen';
import FeedScreen from './screens/FeedScreen';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function LoggedInFlow(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="stats" component={StatsScreen} />
            <Tab.Screen name="feed" component={FeedScreen} />
        </Tab.Navigator>
    )
}

export default function(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Logged" component={LoggedInFlow} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}