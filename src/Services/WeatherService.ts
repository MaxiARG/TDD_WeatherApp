import axios, { AxiosResponse } from "axios";
import { WeatherType, nullWeather } from "../types/Weather";
import { CurrentWeatherRawResponseDto, nullCurrentWeatherRawResponse } from "./dto/weatherService.dto";

class WeatherService {

    static async formatCurrentWeatherResponse(response: AxiosResponse<CurrentWeatherRawResponseDto>){
        const {data} = response;
        const weather = data.weather[0];

        return {
            temperature: data.main.temp,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            icon: weather ? `http://openweathermap.org/img/wn/${weather.icon}@4x.png` : null,
            description: weather?.description ?? null,
            city: data.name,        
        }
    }


    static async fetchCurrentWeather(lat: number, lon: number): Promise<WeatherType>{
        return axios.get<nullCurrentWeatherRawResponse>('https://api.openweathermap.org/data/2.5/weather',
            { 
                params:
                {
                    lat,
                    lon,
                    appid: 'eea2860607df20d73edc49990b46c89a',
                    units: 'metric'
                }
            }
        ).then(WeatherService.formatCurrentWeatherResponse);
    }
}
export default WeatherService;
