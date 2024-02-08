import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Button from './Button';
import { Colors } from '../types/constants';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type FormValues = {
  latitude: string;
  longitude: string;
}

let validationSchema = Yup.object({
  latitude: Yup.number().min(-90).max(90) ,
  longitude: Yup.number().min(-90).max(90)
});

export default function WeatherCoordinates() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: { latitude: '0', longitude: '0' },
    mode:'onChange'
  })

  const onSubmit = ((data: FormValues) => {
    navigation.navigate('Weather', data);
  })

  return (
    <View testID='weather-coordinates'>
      <View className='flex-col mb-[15]'>
        <Controller
          name='latitude'
          control={control}
          render={({field: {value, onChange, onBlur}}) => (
            <TextInput 
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              testID='weather-coordinates-latitude'
              className='bg-transparent m-3 rounded-lg border-2 border-gray-400 px-[15] py-[8] color-white'
              placeholder='Lat'
              placeholderTextColor={Colors.WHITE}
            />
          )}
          />
        {errors.latitude &&
         <Text className='color-red-600 font-extrabold'>Latitude must be a valid number</Text> 
         } 
        <Controller
          name='longitude'
          control={control}
          render={({field}) => (
            <TextInput 
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              testID='weather-coordinates-longitude'
              className='bg-transparent m-3 rounded-lg border-2 border-gray-400 px-[15] py-[8] color-white'
              placeholder='Long'
              placeholderTextColor={Colors.WHITE}
            />
          )}
          />
        {errors.longitude &&
         <Text  className='color-red-600 font-extrabold'>Longitude must be a valid number</Text> 
         } 

      </View>
      <Button onPress={handleSubmit(onSubmit)} label='find' />
    </View>
  )
}