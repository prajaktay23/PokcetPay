import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryView from '../../components/atoms/PrimaryView'
import PrimaryText from '../../components/atoms/PrimaryText'
import Colors from '../../hooks/useThemeColors'
import Carousel from '../../components/atoms/Carousel'
import PrimaryButton from '../../components/atoms/PrimaryButton'

const WelcomeScreen = ({navigation, route} : any) => {
  return (
   <PrimaryView style={{justifyContent: 'space-between'}}> 
    <View style={{paddingTop: '15%'}}>
      <PrimaryText style={{ color: Colors.primaryText, fontSize: 30 }}>
        Welcome to <Text style={{color: Colors.accentGreen}}>Pocket Pay</Text>
      </PrimaryText>
    </View>

    <Carousel />

    <View style={{marginBottom: 20}}>
      <PrimaryButton onPress={() => {navigation.navigate('ExistingUserScreen');}} buttonTitle={'Existing User'} />
        <PrimaryText
          style={{ color: Colors.primaryText, fontSize: 12, paddingVertical: 10, textAlign: 'center' }}>
          or</PrimaryText>
         <PrimaryButton onPress={() => navigation.navigate('RegisterNameScreen')} buttonTitle={'New User'} />
    </View>
   </PrimaryView>
  )
} 

export default WelcomeScreen

const styles = StyleSheet.create({})