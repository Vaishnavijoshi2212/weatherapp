import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  weatherTemp:any;
  todayDate = new Date()
  cityName:any;
  icon:any;
  description: any;
  mintemp: any;

  constructor(public httpClient :HttpClient) {
    this.loadData()
  }
 
  
  loadData() {
    interface WeatherResponse {
      main: {
        temp: any;
        temp_min:any;
        temp_max:any
       
      };
    
      name:string;
      
    
    }
    this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Mumbai"}&appid=${API_KEY}`).subscribe((results: WeatherResponse) => {
      console.log(results);
      this.weatherTemp = results.main;
     this.cityName= results.name;

    
     
    });
  }
  
  

}
