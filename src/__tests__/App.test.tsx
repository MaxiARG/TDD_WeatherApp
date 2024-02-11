import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import AppNavigator from '../screens/AppNavigator';
import App from '../App';
import { View } from 'react-native';
import {Provider} from 'react-redux';

jest.mock('../screens/AppNavigator', () => jest.fn());

jest.mock('react-redux', () => {return {Provider: jest.fn()}});

describe('App', () => {

  it('Se monta correctamente.', () => {
        (Provider as jest.Mock).mockImplementationOnce(({children})=> children);

        const MockAppNavigator = AppNavigator as jest.Mock;
        MockAppNavigator.mockReturnValueOnce(<View testID='mock-routes' />);

        const w = render(<App />);
        w.getByTestId('mock-routes')
  });

  it('Debe montar Provider', () => {
    (Provider as jest.Mock).mockReturnValueOnce(<View testID='mock-provider'></View>)

    const w = render(<App />);
    w.getByTestId('mock-provider')
});


})