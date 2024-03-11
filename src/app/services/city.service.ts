import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city: any;

  constructor(private httpService: HttpService) { }

  getCityData(city: any) {
    console.log('im in')
    console.log(city)
    this.city = city;
    if (city) {
      this.httpService.getCityWeather(city).subscribe(cityWeather => {
        console.log(cityWeather)
      })
    }

  }
}
