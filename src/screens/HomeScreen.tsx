import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../types/constants';

export default function HomeScreen() {
  return (
    <LinearGradient 
    colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]} 
    testID='homeScreen' 
    className='flex-1 px-[40] content-between justify-evenly'
    >
        <View >
            <View >
                <Text>AAAAAAAAAAAAAAAA</Text>
                <Text>AAAAAAAAAAAAAAAA</Text>
                <Text>AAAAAAAAAAAAAAAA</Text>
                <Text>AAAAAAAAAAAAAAAA</Text>
                <Text>AAAAAAAAAAAAAAAA</Text>
            </View>
        </View>
    </LinearGradient>
  )
}
