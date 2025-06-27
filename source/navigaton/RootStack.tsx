import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
  <Stack.Navigator initialRouteName='AuthStack' screenOptions={{headerShown: false}}>
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="AppTabs" component={AppTabs} />
  </Stack.Navigator>
  )
}

export default RootStack
