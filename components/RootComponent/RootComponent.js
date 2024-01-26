import { View, Text } from 'react-native'
import React from 'react'

const RootComponent = props => {
  return (
    <View style={{flex:1, backgroundColor:'#22272B',padding:0,paddingHorizontal:5}}>
{props.children}
    </View>
  )
}

export default RootComponent