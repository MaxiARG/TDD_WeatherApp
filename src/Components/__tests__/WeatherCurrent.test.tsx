import 'react-native';
import React from 'react';
import { render, screen, fireEvent, waitFor, act, waitForElementToBeRemoved } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCurrent from '../WeatherCurrent';
import { useNavigation } from '@react-navigation/native';
import LocationService from '../../Services/LocationService';
import { Colors } from '../../types/constants';

jest.mock('@react-navigation/native', () => {
    return {
      //Returns the actual module instead of a mock
      ...jest.requireActual<object>('@react-navigation/native'),
      //mockeo lo que quiero moickear
      useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
    }
})
 
describe('Test WeatherCurrent', () => {

  it('Se monta correctamente.', () => {
        const weather = render(<WeatherCurrent />);
        weather.getByTestId('weather-current');
  });

  it('Debe navegar a la screen Weather con la ubicacion gps', async () => {
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

  it('Debe mostrar el Label', () => {
    const weather = render(<WeatherCurrent />);
    weather.getByText('Weather at my position');
});


})


describe('Loader', () => {
  it('Debe mostrarse mientras se haga el fetch de la posicion gps', async () => {
      // esto es solo una declaracion de typescript de una funcion que recibe un parametro y devuelve nada.
      let mockResolve!: (position: {latitude: number, longitude: number})  => void;
      //Puede ser tratado como si hubiera sido creado con jest.fn
      //Hay que modificar su implementation para controlar la promesa.
      //https://www.developright.co.uk/posts/jest-mock-vs-jest-spyon-what-to-use-for-mocking.html
      jest.spyOn(LocationService, 'getCurrentPosition').mockImplementationOnce(
        () => 
         new Promise ((resolve) => {
            mockResolve = resolve;
          })
      )
      //Mockeado la implementacion para que devuelva una promesa, proceso a  simular el boton
        const weather = render(<WeatherCurrent />);
        const button = weather.getByTestId('weather-current');
        fireEvent.press(button);

        //Usa resolves porque findBy es una promesa. Entonces espero a que la promesa se cumpla, osea, que encontro el elemento ID
        await expect(weather.findByTestId('button-loading')).resolves.toBeDefined();
        // When writing UI tests, tasks like rendering, user events, or data fetching 
        // can be considered as “units” of interaction with a user interface. React provides
        //  a helper called act() that makes sure all updates related to these “units” have 
        //  been processed and applied to the DOM before you make any assertions
        //makes sure that anything that might take time - rendering, user events, data fetching - within it is completed before test assertions are run.
        await act(async () => {
           mockResolve({latitude: 0, longitude: 0});
        })
  });

  it('El Loading debe desaparecer luego de hacer fetch correctamente', async () => { 
        const weather = render(<WeatherCurrent />);
        const button = weather.getByTestId('weather-current');
        fireEvent.press(button);
        //la logica de esto es la siguiente:
        //quiero asegurarme que loading se setea en false luego de hacer el fetch
        //esta funcion espera a que el componente loading desaparece del Tree
        //y en ese caso loading seria false y se cumpliria.
        //Si esto devuelve resolved, significa que findByTestID encontró el componente.
        //En este test estoy intentando evaluar que ya no lo encuentre, por lo que deberia devolver rejected
        //return expect(weather.findByTestId('button-loading')).rejects.toThrow()
        return waitForElementToBeRemoved(() => weather.getByTestId('button-loading'));

  })

  it('El Loading debe desaparecer si hubo un error en el fetching',  async () => {

    jest
    .spyOn(LocationService, 'getCurrentPosition')
    .mockRejectedValue(new Error(''));

      const w = render(<WeatherCurrent />);
      const button = w.getByTestId('weather-current');
      fireEvent.press(button);

      //It means button-loading was  not found on the tree.
    // await expect( w.findByTestId('button-loading')).rejects.toThrow(''); ->>> >>>>>>>>>>>>>>>>>> VER SI SE PUEDE HACER ANDAR ESTE.
     await waitFor(() => {
      expect(w.queryByTestId('button-loading')).toBeNull();
    });
     //return waitForElementToBeRemoved(() => w.getByTestId('button-loading'));
  }); 


})


describe('Error', () => {

  it('Error debe mostrarse si fetching position falló', async () => {
      jest.spyOn(LocationService, 'getCurrentPosition')
      .mockRejectedValueOnce(new Error(''));

      const w = render(<WeatherCurrent />);
      const b = w.getByTestId('weather-current');

      fireEvent.press(b);
      
      await waitFor(() => {
        w.debug()
        expect(b).toHaveStyle({borderColor: Colors.ERROR});
      },{timeout:5000})

  }, 5000);

  
  it('Debe resetearse luego de solicitar Position de nuevo. NO FUNCIONA COMO SE ESPERA', async () => {
    jest.spyOn(LocationService, 'getCurrentPosition')
    .mockRejectedValueOnce(new Error(''));
    //ESTO va a correr only ONCE, por lo que si apreto 2 veces el boton, la 2da vez no saldria por rejected
    const w = render(<WeatherCurrent />);
    const b = w.getByTestId('weather-current');

    fireEvent.press(b);
    fireEvent.press(b);
    await waitFor(() => {
      
      expect(b).toHaveStyle({borderColor: Colors.ERROR});
    },{timeout:4000})

}, 4000);



})