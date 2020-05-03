import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen'
import StatsScreen from './screens/StatsScreen';
import FeedScreen from './screens/FeedScreen';
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function LoggedInFlow(){
    return(
        <Tab.Navigator tabBarOptions={{
            labelStyle:{fontSize:16},
            activeTintColor:"#75ffaf"
        }}>
            <Tab.Screen name="feed" component={FeedScreen} 
            options={{
                tabBarIcon:({focused}) =><MaterialCommunityIcons name="clipboard-text-outline" size={30} color={focused ?"#75ffaf":"gray"}/>
            }}/>
            <Tab.Screen name="stats" component={StatsScreen} 
            options={{
                tabBarIcon: ({focused}) => <Entypo name="line-graph"size={30} color={focused?"#75ffaf":"gray"}/>
            }} />
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

