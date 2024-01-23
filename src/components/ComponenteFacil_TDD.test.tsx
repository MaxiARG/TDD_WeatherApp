import 'react-native';
import React from 'react';
import App from '../../App';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import ComponenteFacil_TDD from './ComponenteFacil_TDD';

it('renders correctly', () => {
  renderer.create(<ComponenteFacil_TDD />);
});

it("Formulario envia 2 respuestas", () => {

//   fireEvent.changeText(respuestasInput[0], 'resp1');

})