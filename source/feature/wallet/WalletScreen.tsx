import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WalletCard from './WalletCard'
import Ionicons from '@react-native-vector-icons/ionicons';

const WalletScreen = ({ navigation }: any) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 12 }}>Welcome back </Text>
          <Text style={{ fontSize: 18 }}>Prajakta Yadav</Text>
        </View>

        <Ionicons name="notifications-outline" color="black" size={20} />
      </View>


      {/* Wallet card view */}
      <WalletCard />

    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})