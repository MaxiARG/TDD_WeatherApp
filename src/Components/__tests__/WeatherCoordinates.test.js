import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCoordinates from '../WeatherCoordinates';

describe('Test WeatherCoordinates', () => {
  beforeEach(() => {
  })

  afterEach(()=>{
  })
  it('Se monta correctamente.', () => {
        const coord = render(<WeatherCoordinates />);
        expect(coord.getByText('WeatherCoordinates')).toBeTruthy()
  });


})