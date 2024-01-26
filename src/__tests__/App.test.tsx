import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import AppNavigator from '../screens/AppNavigator';
import App from '../App';
import { View } from 'react-native';

jest.mock('../screens/AppNavigator', () => jest.fn());

describe('Test App', () => {

  it('Se monta correctamente.', () => {
        const MockAppNavigator = AppNavigator as jest.Mock;
        MockAppNavigator.mockReturnValueOnce(<View testID='mock-routes' />);

        const w = render(<App />);
        w.getByTestId('mock-routes')
  });


})