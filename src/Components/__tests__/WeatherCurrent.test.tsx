import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCurrent from '../WeatherCurrent';

// require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

describe('Test WeatherCurrent', () => {

  it('Se monta correctamente.', () => {
        const weather = render(<WeatherCurrent />);
        weather.getByTestId('mock-weather-current');
  });

  it.todo('Debe navegar a la screen Weather con la ubicacion');


})