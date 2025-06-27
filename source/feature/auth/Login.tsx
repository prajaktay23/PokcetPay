import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/rn-logo.png')} style={{ width: 200, height: 200 }} />
            <Text style={{ fontSize: 16, color: 'gray', marginBottom: 50, marginTop: 20 }}>Welcome to the cat app!</Text>

            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: '80%', marginTop: 30, borderRadius: 5 }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: '80%', marginTop: 20, borderRadius: 5 }}
                placeholder="Password"
                keyboardType="number-pad"
            />

            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 20, width: '80%', alignItems: 'center' }}
                onPress={() => navigation.navigate('AppTabs')}>
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})