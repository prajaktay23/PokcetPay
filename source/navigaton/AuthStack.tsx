import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../feature/auth/Login';
import OTPScreens from '../feature/auth/OTPScreens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="OTPScreen" component={OTPScreens}/>
    </Stack.Navigator>
  )
}

export default AuthStack