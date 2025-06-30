import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PrimaryView from '../../components/atoms/PrimaryView'
import Colors from '../../hooks/useThemeColors'
import PrimaryText from '../../components/atoms/PrimaryText'

const RegisterNameScreen = ({ navigation, route }: any) => {
  const handleSkip = () => {

  }
  return (
    <PrimaryView style={{justifyContent: 'space-between'}}>
      <View >
       <TouchableOpacity
          style={styles.skipButtonContainer}
          onPress={handleSkip}>
          <PrimaryText style={{color: Colors.accentGreen, fontSize: 14}}>
            Skip
          </PrimaryText>
        </TouchableOpacity>
      </View>
    </PrimaryView>
  )
}

export default RegisterNameScreen

const styles = StyleSheet.create({
   skipButtonContainer: {
    alignSelf: 'flex-end',
    paddingTop: '5%',
  },
})