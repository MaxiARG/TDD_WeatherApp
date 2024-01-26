import {View} from 'react-native';
import React, { useEffect } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import {it} from '@jest/globals';
import AppNavigator from '../AppNavigator';
import HomeScreen from '../HomeScreen';
import { useNavigation } from '@react-navigation/native';
import WeatherScreen from '../WeatherScreen';

jest.mock('../HomeScreen', () => jest.fn());
jest.mock('../WeatherScreen', () => jest.fn());

describe('Test AppNavigator', () => {
  it('Debe renderizar HomeScreen por defecto', async () => {
    const MockHomeScreen = HomeScreen as jest.Mock;
    MockHomeScreen.mockReturnValueOnce(<View testID='mock-home-screen' />);
    const w = render(<AppNavigator />);

    // Se usa cuando trabajo con componentes de react que tienen funcionalidades asincronicas, como en el caso de React Navigation.
    await waitFor(() => {
        w.getByTestId('mock-home-screen')
    })
  })


  it('Debe navegar a WeatherScreen', async () => {
    //La navegacion se produce desde HomeScreen hacia WeatherScreen. Por eso mockeo HomeScreen
    const MockHomeScreen = HomeScreen as jest.Mock;
    //1- mockeo Homescreen
    MockHomeScreen.mockImplementationOnce(()=>{
      const navigation = useNavigation();
      useEffect (()=>{
          navigation.navigate('Weather');
      }, [navigation]);
      return null; //no me importa en absoluto retornar algun componente.
    })
    
    //2- Creo el mock de WeatherScreen
    const MockWeatherScreen = WeatherScreen as jest.Mock;
    MockWeatherScreen.mockReturnValue(<View testID='weather-mock-screen' />);

    //3- Comienzo a crear la renderizacion
    const w = render(<AppNavigator/>);

    //4- testeo si existe en AppNavigator tree
    await waitFor(() => {
      w.getByTestId('weather-mock-screen')
    })



  })


})