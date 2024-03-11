import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCitiesByName(cityName: string) {
    return this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`).pipe(
      tap( response => {
        console.log(response)
      }),
      map((itemsWrapper: any) => {
        return itemsWrapper.results
      })
    )
  }

  getCityWeather(city: any) {
    console.log('GET WEATHER')
    console.log(city)
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
  }
}
