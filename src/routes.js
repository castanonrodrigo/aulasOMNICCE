import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import Exemplo from './screens/Exemplo'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Exemplo" component={Exemplo} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}