import { StatusBar, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../../hooks/useThemeColors'


interface PrimaryViewProps {
    // colors: Colors;
    children?: ReactNode;
    style?: ViewStyle;

}
const PrimaryView = ({ children, style }: PrimaryViewProps) => {
    const isDark = Colors?.primaryBackground;
    return (
        <View style={[
            styles.mainContainer,
            { backgroundColor: isDark },
            style
        ]}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={Colors.primaryBackground} />
             {children}
        </View>
    )
}

export default PrimaryView

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingLeft: '6%',
        paddingRight: '6%',
    },
})