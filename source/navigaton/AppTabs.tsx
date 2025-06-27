import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WalletScreen from '../feature/wallet/WalletScreen';
import TransactionsScreen from '../feature/transaction/TransactionsScreen';
import BudgetScreen from '../feature/budget/BudgetScreen';
import OffersScreen from '../feature/offers/OffersScreen';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator initialRouteName='WalletScreen' screenOptions={{headerShown: false}}>
        <Tab.Screen name="WalletScreen" component={WalletScreen} />
        <Tab.Screen name="TransactionsScreen" component={TransactionsScreen} />
        <Tab.Screen name="BudgetScreen" component={BudgetScreen} />
        <Tab.Screen name="OffersScreen" component={OffersScreen} />
        <Tab.Screen name="SettingsStack " component={SettingsStack } />
    </Tab.Navigator>
  )
}

export default AppTabs