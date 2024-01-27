import {View} from 'react-native';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherScreen from '../WeatherScreen';


describe('Test WeatherScreen', () => {
  it('Debe renderizar WeatherScreen', async () => {
    const w = render(<WeatherScreen />);
    w.getByTestId('mock-weather-screen')
  })


})