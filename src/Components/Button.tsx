import { View, Text, ViewProps, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../types/constants';

type Props = {
    label: string;
    onPress: () => void;
    loading?: boolean;
} & ViewProps; 

export default function Button(props: Props) {
  const {label, onPress, style, loading, ...others} = props;

  return (
    <TouchableOpacity testID='button' onPress={onPress} > 
      <LinearGradient {...others} colors={[Colors.LIGHTER_GRAY, Colors.DARK_GRAY]} className='border-r-2 px-3 py-4 justify-center items-center' >
        {
        loading ? (<ActivityIndicator size={24} color={Colors.WHITE} testID='button-loading'/>) 
        : 
        <Text className='size-7 color-white'>{label}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  )
}