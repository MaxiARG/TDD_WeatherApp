import 'react-native';
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react-native';
import {it} from '@jest/globals';
import WeatherCoordinates from '../WeatherCoordinates';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({navigate: jest.fn()}),
  }
})

describe('Test WeatherCoordinates', () => {

  it('Se monta correctamente.', () => {
        const coord = render(<WeatherCoordinates />);
        coord.getByTestId('weather-coordinates')
  });

  it('Debe navegar a la screen Weather con las coordenadas cuando el formulario es valido', async () => {
    const mockNavigate = jest.fn();
    const useNavigationMock = useNavigation as jest.Mock;
    useNavigationMock.mockReturnValueOnce({navigate: mockNavigate})

    const w = render(<WeatherCoordinates />);

    const fields = {
      latitude: 0,
      longitude: 0
    };

    fireEvent.changeText(w.getByTestId('weather-coordinates-latitude') , '0');
    fireEvent.changeText(w.getByTestId('weather-coordinates-longitude') , '0');

    const button = w.getByTestId('button');

    // await act(async () => {
    //   fireEvent.press(button);
    // });

    fireEvent.press(button);

     
      await waitFor(() =>{
        expect(mockNavigate).toHaveBeenCalled()
      })

    await waitFor(() =>{
      expect(mockNavigate).toHaveBeenCalledWith('Weather', fields )
    })

});


})



describe('Latitude field', () => { 

  it('No debe mostrar error cuando el valor es el menor posible', async () => {
      const w = render(<WeatherCoordinates />);

      const field = w.getByTestId('weather-coordinates-latitude');

      fireEvent.changeText(field, '-90')
       
      await waitFor(async ()=>{
        expect( w.queryByText('Latitude must be a valid number')).toBeNull()
      });
     // return expect(w.findByText('Latitud must be a valid number')).rejects.toThrow();
  });


  it('No debe mostrar error cuando el valor es el mayor posible', async () => {
    const w = render(<WeatherCoordinates />);

    const field = w.getByTestId('weather-coordinates-latitude');

      // Verificar que el texto "latitude" no está presente inicialmente
    expect(w.queryByText('Latitude must be a valid number')).toBeNull();

    fireEvent.changeText(field, '90')

    //Si esto sale por resolve, significa que encontro el texto. Yo esperaba que no lo encuentre, porque puse reject.
    await expect(w.findByText('Latitude must be a valid number')).rejects.toThrow()

   // return expect(w.findByText('Latitud must be a valid number')).rejects.toThrow();
});

    it('Debe mostrar error cuando el valor es menor que el menor de los valores aceptados', async () => {
      const w = render(<WeatherCoordinates />);

      const field = w.getByTestId('weather-coordinates-latitude');

      expect(w.queryByText('Latitude must be a valid number')).toBeNull();

      fireEvent.changeText(field, '-91')

      expect(await w.findByText('Latitude must be a valid number')).toBeVisible();

    });

    it('Debe mostrar error cuando el valor es mayor que el menor de los valores aceptados', async () => {
      const w = render(<WeatherCoordinates />);

      const field = w.getByTestId('weather-coordinates-latitude');

      fireEvent.changeText(field, '91')

      await waitFor(  async ()=>{
        expect(await w.findByText('Latitude must be a valid number')).toBeVisible()
      })
      
    });


    it('Debe mostrar error cuando el valor no es un numero', async () => {
      const w = render(<WeatherCoordinates />);

      const field = w.getByTestId('weather-coordinates-latitude');

      fireEvent.changeText(field, 'abc')

      await waitFor( async ()=>{
         expect(await w.findByText('Latitude must be a valid number')).toBeVisible();
      })
      
    });

  })
    describe('Longitude field', () => { 

      it('No debe mostrar error cuando el valor es el menor posible', async () => {
          const w = render(<WeatherCoordinates />);
    
          const field = w.getByTestId('weather-coordinates-longitude');
    
          fireEvent.changeText(field, '-90')
           
          await waitFor(async ()=>{
            expect( w.queryByText('Longitude must be a valid number')).toBeNull()
          });
         // return expect(w.findByText('Latitud must be a valid number')).rejects.toThrow();
      });
    
    
      it('No debe mostrar error cuando el valor es el mayor posible', async () => {
        const w = render(<WeatherCoordinates />);
    
        const field = w.getByTestId('weather-coordinates-longitude');
    
          // Verificar que el texto "Longitude" no está presente inicialmente
        expect(w.queryByText('Longitude must be a valid number')).toBeNull();
    
        fireEvent.changeText(field, '90')
    
        //Si esto sale por resolve, significa que encontro el texto. Yo esperaba que no lo encuentre, porque puse reject.
        await expect(w.findByText('Longitude must be a valid number')).rejects.toThrow()
    
       // return expect(w.findByText('Latitud must be a valid number')).rejects.toThrow();
    });
    
        it('Debe mostrar error cuando el valor es menor que el menor de los valores aceptados', async () => {
          const w = render(<WeatherCoordinates />);
    
          const field = w.getByTestId('weather-coordinates-longitude');
    
          expect(w.queryByText('Longitude must be a valid number')).toBeNull();
    
          fireEvent.changeText(field, '-91')
    
          expect(await w.findByText('Longitude must be a valid number')).toBeVisible();
    
        });
    
        it('Debe mostrar error cuando el valor es mayor que el menor de los valores aceptados', async () => {
          const w = render(<WeatherCoordinates />);
    
          const field = w.getByTestId('weather-coordinates-longitude');
    
          fireEvent.changeText(field, '91')
    
          await waitFor(  async ()=>{
            expect(await w.findByText('Longitude must be a valid number')).toBeVisible()
          })
          
        });
    
    
        it('Debe mostrar error cuando el valor no es un numero', async () => {
          const w = render(<WeatherCoordinates />);
    
          const field = w.getByTestId('weather-coordinates-longitude');
    
          fireEvent.changeText(field, 'abc')
    
          await waitFor( async ()=>{
             expect(await w.findByText('Longitude must be a valid number')).toBeVisible();
          })
          
        });


})