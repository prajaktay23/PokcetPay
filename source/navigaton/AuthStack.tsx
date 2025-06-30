import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../feature/auth/Login';
import OTPScreens from '../feature/auth/OTPScreens';
import OnBoardingScreen from '../feature/auth/OnBoardingScreen';
import WelcomeScreen from '../feature/auth/WelcomeScreen';
import RegisterNameScreen from '../feature/auth/RegisterNameScreen';


const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='OnBoardingScreen' screenOptions={screenOptions}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="RegisterNameScreen" component={RegisterNameScreen}/>

        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="OTPScreens" component={OTPScreens}/>
    </Stack.Navigator>
  )
}

export default AuthStack