import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen'
import StatsScreen from './screens/StatsScreen';
import FeedScreen from './screens/FeedScreen';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';


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
                tabBarIcon:()=><MaterialIcons name="rss-feed" size={27} color="gray"/>
            }}/>
            <Tab.Screen name="stats" component={StatsScreen} 
            options={{
                tabBarIcon: ()=><Ionicons name="md-stats"size={27} color="gray"/>
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

