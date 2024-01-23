import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment';
import WeatherCurrent from '../Components/WeatherCurrent';
import WeatherCoordinates from '../Components/WeatherCoordinates';

export default function HomeScreen() {
    const now = moment();
  return (
    <View 
    testID='homeScreen'
    className='flex-1 px-[40] content-between justify-evenly  ' >
        <View className='content-end '>
            <Text className='font-extrabold text-2xl'>
                {now.format('MMM DD, YYYY')}
            </Text>
            <Text className='font-extrabold'>
                {now.format('dddd')}
            </Text>
        </View>
        <WeatherCurrent />
        <WeatherCoordinates />
        <Text testID='mock-screen-divider' className='text-center'>Or</Text>
    </View>
  )
}
