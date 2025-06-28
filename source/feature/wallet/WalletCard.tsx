import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WalletCard = () => {
  return (
    <View style={{ backgroundColor: '#F0FFFF', height: 200, borderWidth: 1, borderColor: 'lightblue', borderRadius: 10 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'column', flex: 1, padding: 16 }}>
        <View>
          <Text style={{fontSize: 12 }}>Balance</Text>
          <Text style={{fontSize: 24, fontWeight: 'bold' }}>$3000</Text>
        </View>
        <View>
          <Text style={{fontSize: 12, color: 'darkgrey' }}>Card Number</Text>
          <Text style={{fontSize: 16, color: 'darkgrey' }}>123456789012</Text>
        </View>
      </View>

    </View>
  )
}

export default WalletCard

const styles = StyleSheet.create({})