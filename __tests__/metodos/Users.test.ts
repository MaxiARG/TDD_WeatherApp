import { render, screen, fireEvent } from '@testing-library/react-native';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
const axios = require('axios')
import Users from '../../src/Clases/User';

jest.mock('axios');
it('Test Users', () => {
  //lo que voy a hacer que devuelva
  const usuarios = [{nombre: 'Juan'}];
  const resp = {data: usuarios}; //porque axios devuelve objeto data
  
  axios.get.mockResolvedValue(resp);
  //Alternativa
  //axios.get.mockImplementation(()=> Promise.resolve(resp));

  return Users.all()
    .then(data => expect(data).toEqual(usuarios));
});



