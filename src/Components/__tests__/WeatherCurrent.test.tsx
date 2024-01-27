import 'react-native';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCurrent from '../WeatherCurrent';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
    return {
      //Returns the actual module instead of a mock
      ...jest.requireActual<object>('@react-navigation/native'),
      //mockeo lo que quiero moickear
      useNavigation: jest.fn(),
    }
})
// require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

describe('Test WeatherCurrent', () => {

  it('Se monta correctamente.', () => {
        const weather = render(<WeatherCurrent />);
        weather.getByTestId('weather-current');
  });

  it('Debe navegar a la screen Weather con la ubicacion', async () => {
    const mockNavigate = jest.fn();
    const useNavigationMock = useNavigation as jest.Mock;
    useNavigationMock.mockReturnValueOnce({navigate: mockNavigate});

    const w = render(<WeatherCurrent />);
    const button = w.getByTestId('weather-current');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenLastCalledWith('Weather', {
        latitude: 0,
        longitude:0
      })
    })



  })


})