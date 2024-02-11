
import {it} from '@jest/globals';
import { WeatherType } from '../../types/Weather';
import nock from 'nock';
import { CurrentWeatherRawResponseDto, nullCurrentWeatherRawResponse as mockedWeather} from '../dto/weatherService.dto';
import WeatherService from '../WeatherService';

describe('WeatherService', () => {
    const mockResponse = {
        ...mockedWeather,
        main:{
            ...mockedWeather.main,
            temp:0,
            humidity:0,
            pressure:0,

        },
        wind:{
            ...mockedWeather.wind,
            speed: 0,
        },
        weather:[{description:'', main:'', id:0, icon:''}],
        city: ''
    };

  it('Debe devolver CurrentWeather formateado de la API', async () => {
    //Hay que mockear el llamado y la respuesta. Pues la respuesta cambia todo el tiempo.
    const expectedWeather : WeatherType = {
        temperature:  0,
        windSpeed: 0,
        humidity: 0,
        pressure: 0,
        icon:  'http://openweathermap.org/img/wn/@4x.png',
        description: '',
        city: '',
    }
    nock('https://api.openweathermap.org').get('/data/2.5/weather').query(true).reply(200, mockResponse);
    const weather = await WeatherService.fetchCurrentWeather(0,0)
    expect(weather).toEqual(expectedWeather);

  });

  it('Debe devolver un Weather vacio', async () => {
    //Hay que mockear el llamado y la respuesta. Pues la respuesta cambia todo el tiempo.
    const expectedWeatherEmpty : CurrentWeatherRawResponseDto = {
        ...mockResponse,
        weather: [],
    }
    nock('https://api.openweathermap.org').get('/data/2.5/weather').query(true).reply(200, expectedWeatherEmpty);
   
    const {icon, description} = await WeatherService.fetchCurrentWeather(0,0)

    expect(icon).toBeNull();
    expect(description).toBeNull();
  });

});