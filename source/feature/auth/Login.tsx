import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Login = () => {
    const navigation = useNavigation<any>();

    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [code, setCode] = useState('');



    async function signIn() {
        try {
            const confirmation = await auth().signInWithPhoneNumber('+91' + phoneNumber);
            console.log("confirmation", confirmation);
            setConfirm(confirmation);
            // navigation.navigate('OTPScreens', {phoneNumber: phoneNumber})
            setShowOTP(true);
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong");
        }
    }

    async function confirmVerificationCode() {
        if (!confirm) {
            Alert.alert("Error", "No confirmation object found.");
            return;
        }

        try {
            await confirm.confirm(code);
            setConfirm(null);
            console.log("achived");
            navigation.navigate('AppTabs')
        } catch (error: any) {
            Alert.alert("Invalid code", error.message || "Something went wrong");
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/logo.png')} style={{ width: 150, height: 150 }} />
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 50, marginTop: 20 }}>Welcome to the Pocket Pay!</Text>

            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: '80%', marginTop: 30, borderRadius: 5 }}
                placeholder="Enter Phone number"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            {showOTP &&
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: '80%', marginTop: 30, borderRadius: 5 }}
                    placeholder="Enter OTP"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value={code}
                    onChangeText={setCode}
                />
            }
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20, width: '80%', alignItems: 'center' }}
                // onPress={() => {showOTP ? confirmVerificationCode() : signIn()}} disabled={phoneNumber.trim() === "" 
                // || (showOTP && code.trim() === "")} 
                onPress={navigation.navigate('AppTabs')}
                >
                <Text style={{ color: 'white' }}>{showOTP ? "Confirm OTP" : "Send OTP"}</Text>
            </TouchableOpacity>
        </View>
    )                                                                                              
}

export default Login

const styles = StyleSheet.create({})