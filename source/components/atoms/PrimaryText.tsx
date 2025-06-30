import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../../hooks/useThemeColors';

interface PrimaryTextProps {
    children?: ReactNode;
    style?: TextStyle;
}

const PrimaryText = ({ children, style }: PrimaryTextProps) => {
    // const colors = useThemeColors();
    const textColor = Colors.primaryText;
    return (
        <Text style={[styles.primaryText, style]}>
            {children}
        </Text>
    )
}

export default PrimaryText

const styles = StyleSheet.create({
    primaryText: {
    fontFamily: 'FiraCode-Medium',
    includeFontPadding: false,
    fontSize: 14,
  },
})