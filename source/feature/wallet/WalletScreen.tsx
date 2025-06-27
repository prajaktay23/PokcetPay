import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../components/Headers'

const WalletScreen = ({navigation} : any) => {

  return (
    <View style={{flex: 1}}>
      <Headers title="Wallet" onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})