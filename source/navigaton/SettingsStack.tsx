import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen from '../feature/settings/SettingsScreen';
import BiometricSettingsScreen from '../feature/settings/BiometricSettingsScreen';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="BiometricSettingsScreen" component={BiometricSettingsScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStack