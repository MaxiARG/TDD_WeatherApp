import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCurrent from '../WeatherCurrent';

// require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

describe('Test WeatherCurrent', () => {
  beforeEach(() => {
  })

  afterEach(()=>{
  })
  it('Se monta correctamente.', () => {
        const weather = render(<WeatherCurrent />);
        expect(weather.getByText('WeatherCurrent')).toBeTruthy()
  });


})