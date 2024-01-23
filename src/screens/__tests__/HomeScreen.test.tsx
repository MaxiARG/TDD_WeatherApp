import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import HomeScreen from '../HomeScreen';
import WeatherCurrent from '../../Components/WeatherCurrent';
import WeatherCoordinates from '../../Components/WeatherCoordinates';
import { View } from 'react-native';
jest.mock('../../Components/WeatherCoordinates', () => jest.fn().mockReturnValue(null));
jest.mock('../../Components/WeatherCurrent', () => jest.fn().mockReturnValue(null));

describe('Test HomeScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2000-01-01T00:00:00')); //Luego de hacer esto, puedo leer el date con new Date y sera el seteado por jest
  })

  afterEach(()=>{
    jest.useRealTimers();
  })
  it('Se monta correctamente.', () => {
        const home = render(<HomeScreen />);
        expect(home.getByTestId('homeScreen')).toBeTruthy()
  });

    it('Debe contener la fecha actual', () => {
      const home = render(<HomeScreen />);
      home.getByText('Jan 01, 2000')
  });

  it('Debe Contener el dia actual', () => {
    const home = render(<HomeScreen />);
    home.getByText('Saturday');
  });

  it('Debe contener weather Current', () => {
    //Los mockeo porque no quiero testear su funcionalidad. Solo quiero testear HomeScreen.
    (WeatherCurrent as jest.Mock).mockReturnValue(<View testID='mock-weather-current'/>);
    const w = render(<HomeScreen />);
    w.getByTestId('mock-weather-current')
  });

  it('Debe contener weather Coordinates', () => {
    (WeatherCoordinates as jest.Mock).mockReturnValue(<View testID='mock-weather-coordinates'/>);
    const w = render(<HomeScreen />);
    w.getByTestId('mock-weather-coordinates')
  });

  it('Debe contener un divider', () => {
    const w = render(<HomeScreen />);
    w.getByTestId('mock-screen-divider')
  });

})