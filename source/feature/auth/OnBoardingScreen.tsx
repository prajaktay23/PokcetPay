import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryView from '../../components/atoms/PrimaryView'
import PrimaryText from '../../components/atoms/PrimaryText';
import PrimaryButton from '../../components/atoms/PrimaryButton';
import Colors from '../../hooks/useThemeColors';

const OnBoardingScreen = ({navigation, route}: any) => {

    const handleClick = () => {
        navigation.navigate('WelcomeScreen');
    };

//   const colors = useThemeColors();
  return (
    <PrimaryView style={{ justifyContent: 'space-between' }}>
      <View>
        <PrimaryText
          style={{ color: Colors.primaryText, fontSize: 90, paddingTop: '20%' }}>
          Pocket Pay
        </PrimaryText>
        <PrimaryText style={{ color: Colors.primaryText, fontSize: 30, paddingTop: '10%' }}>
          Pay Smart. Track Smarter.
        </PrimaryText>
      </View>
      <View>
        <PrimaryButton onPress={handleClick} buttonTitle='Get Started' />
      </View>
    </PrimaryView>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})