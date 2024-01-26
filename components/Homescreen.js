import { View, Text } from 'react-native'
import React from 'react'
import RootComponent from './RootComponent/RootComponent'

const Homescreen = () => {
  return (
    <RootComponent>
    <View>
      <Text style={{color:'white'}}> This is Homescreen</Text>
    </View>
    </RootComponent>

  )
}

export default Homescreen