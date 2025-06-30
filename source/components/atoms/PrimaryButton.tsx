import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../../hooks/useThemeColors'
import PrimaryText from './PrimaryText';

interface PrimaryButtonProps {
    // colors?: Colors;
    onPress(): void;
    disabled?: boolean;
    buttonTitle: string;
}

const PrimaryButton = ({ onPress, disabled, buttonTitle }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {
            backgroundColor: disabled
              ? Colors.secondaryText
              : Colors.primaryText,
          },]} disabled={disabled}>
            <View>
                <PrimaryText children={buttonTitle} style={{color: Colors.buttonText, fontSize: 16}} />
            </View>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})