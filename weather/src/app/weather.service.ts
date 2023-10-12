import { Injectable } from '@angular/core';
import axios from 'axios';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 

  apiKey = 'dac3ca35fd3460b11c2ef8805f885fbb'; // Replace with your OpenWeatherMap API key
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { 

  }

  getWeather(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric' // You can change this to 'imperial' for Fahrenheit
    };

    return axios.get(this.apiUrl, { params });
  }
  
}
