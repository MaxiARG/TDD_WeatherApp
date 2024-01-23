import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Test App', () => {

  it('Se monta correctamente.', () => {
   const app = render(<App />);
   const root = app.getByTestId('rootApp');
   expect(root).toBeTruthy()
  });

})