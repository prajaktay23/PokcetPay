import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@react-native-vector-icons/ionicons';

const WalletCard = ({navigation, route}: any) => {
  let walletId = "123456789012"
  let balance = "300.00"
  const [showWalletId, setShowWalletId] = useState(false);

  return (
   <View style={styles.card}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.label}>Balance</Text>
          <Text style={styles.amount}>₹{balance.toLocaleString()}</Text>
        </View>

        <View>
          <Text style={styles.label}>Wallet ID</Text>
          <View style={styles.row}>
            <Text style={styles.walletId}>
              {showWalletId ? walletId : walletId.replace(/.(?=.{4})/g, '•')}
            </Text>
            <TouchableOpacity onPress={() => setShowWalletId(prev => !prev)}>
              <Ionicons
                name={showWalletId ? 'eye-off' : 'eye'}
                color="gray"
                size={20}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WalletCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2fd',
    height: 200,
    borderRadius: 20,
    padding: 16,
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
    }),
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  walletId: {
    fontSize: 16,
    color: 'darkgray',
    letterSpacing: 1.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 12,
  },
});