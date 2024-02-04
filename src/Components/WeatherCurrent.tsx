import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LocationService from '../Services/LocationService';
import Button from './Button';
import { Colors } from '../types/constants';

export default function WeatherCurrent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleFetchWeather = useCallback( async () => {
    setError(false);
    setLoading(true);
    try{
      let position = await LocationService.getCurrentPosition();
      console.log(position);
      //  throw new Error('error')
      setError(false);
      navigation.navigate('Weather', position);
    } catch(e) {
      console.log("entro en catcha " + e)
      setError(true);
    }

    setLoading(false);

  }, [navigation]);

  useEffect(()=>{
    console.log("ERROR VALE " + error);
  }, [error]);
  
  return (
    <Button 
    testID='weather-current' 
    label='Weather at my position' 
    onPress={handleFetchWeather} 
    loading={loading} 
    style={error && s.error}
    />
  )
}

const s = StyleSheet.create({
  error:{
    borderColor: Colors.ERROR,
    borderWidth: 1,
    borderRadius: 15,

  }
})