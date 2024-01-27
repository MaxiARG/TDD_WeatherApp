import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import LocationService from '../Services/LocationService';
import Button from './Button';

export default function WeatherCurrent() {
  const navigation = useNavigation();

  const handleFetchWeather = useCallback( async () => {
    const position = await LocationService.getCurrentPosition();
    navigation.navigate('Weather', position);
  }, [navigation]);
  
  return (
    <Button testID='weather-current' label='' onPress={handleFetchWeather} />
  )
}