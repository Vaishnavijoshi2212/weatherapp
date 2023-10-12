import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  city: string = '';
  weatherData: any;
  error: string = '';
  constructor(private weatherService: WeatherService) {}
  searchWeather() {
   
    this.weatherService.getWeather(this.city).then((response) => {
      this.weatherData = response.data;
    }).catch((error) => {
      console.error('Error fetching weather data:', error);
      this.error = 'City not found';
    });
  }

}
