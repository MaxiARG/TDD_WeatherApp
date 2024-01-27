import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import Button from '../Button';

describe('Test Button', () => {

  it('Se monta correctamente.', () => {
        const w = render(<Button label='' onPress={jest.fn()} />);
        w.getByTestId('button');
  });

  it('Debe mostrar el loader cuando le paso el loading prop.', () => {
    const w = render(<Button label='' onPress={jest.fn()}  loading />);
    w.getByTestId('button-loading');
});

    it('Debe llamar a onPress cuando se clickea', () => {
        const onPressMocked = jest.fn();
        const w = render(<Button label='' onPress={onPressMocked} />);
        const b = w.getByTestId('button');
        fireEvent.press(b);
        expect(onPressMocked).toHaveBeenCalled();
    });

    it('Debe renderizar el label', () => {
        const onPressMocked = jest.fn();
        const w = render(<Button label='labelTest' onPress={onPressMocked} />);
        w.getByText('labelTest');
    });

    it('Debe aceptar View Props customs (testID por ejemplo)', () => {
        const onPressMocked = jest.fn();
        const w = render(<Button label='labelTest' onPress={onPressMocked} testID='mock-testID'/>);
        w.getByTestId('mock-testID');
    });


})