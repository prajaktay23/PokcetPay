import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Headers = (props: any) => {
  const title = props.title;
  const onPress = props.onPress;

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 16 }}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../assets/left-arrow.png')} style={{ height: 24, width: 24 }} />
      </TouchableOpacity>
      <Text style={{fontSize: 18}}>{title}</Text>
      <View>
        
      </View>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({})