import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import QuestionsBoard from '../src/components/ComponenteFacil_TDD';

it('renders correctly', () => {
  renderer.create(<App />);
});

it("Formulario envia 2 respuestas", () => {
  const preguntas = ['q1', 'q2'];
  const mockFn = jest.fn();
  
  // render(<QuestionsBoard questions={preguntas} onSubmit={mockFn}/>)
  
  // const respuestasInput = screen.getAllByLabelText('respuesta label');

  // fireEvent.changeText(respuestasInput[0], 'resp1');
  // fireEvent.changeText(respuestasInput[1], 'resp2');

  // fireEvent.press(screen.getByText('Enviar Respuestas'));

  // expect(mockFn).toHaveBeenCalled();

})