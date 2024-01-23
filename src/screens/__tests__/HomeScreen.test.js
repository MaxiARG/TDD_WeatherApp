import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';
jest.mock('react-native-reanimated', () => jest.fn());
// require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

jest.mock('react-native-linear-gradient', () => 'LinearGradient');// LinearGradient es el nombre del componente que se usa en HomeScreen

describe('Test HomeScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2000-01-01T00:00:00')); //Luego de hacer esto, puedo leer el date con new Date y sera el seteado por jest
    console.log(new Date().toLocaleDateString())
  })

  afterEach(()=>{
    jest.useRealTimers();
  })
  it('Se monta correctamente.', () => {
        const home = render(<HomeScreen />);
        expect(home.getByTestId('homeScreen')).toBeTruthy()
  });

  it('Seccion Titulo', () => {
    const home = render(<HomeScreen />);
    home.getByText('1/1/2000')
});

})