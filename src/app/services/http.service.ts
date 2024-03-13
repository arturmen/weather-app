import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { City, CityResponse, Weather } from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCitiesByName(cityName: string): Observable<City[]> {
    return this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=12&language=en&format=json`)
      .pipe(
        map(itemsWrapper  => {
          return (itemsWrapper as CityResponse).results
        })
    )
  }

  getCityWeather(city: City): Observable<Weather> {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`) as Observable<Weather>;
  }
}
