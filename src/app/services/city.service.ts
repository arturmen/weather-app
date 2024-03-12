import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { BehaviorSubject, tap } from "rxjs";
import { City, Weather } from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city = new BehaviorSubject<City | null>(null);
  weather = new BehaviorSubject<Weather | null>(null);

  get city$() {
    return this.city.asObservable();
  }

  get weather$() {
    return this.weather.asObservable();
  }

  constructor(private httpService: HttpService) { }

  setCity(city: City) {
    this.city.next(city);
  }

  getWeather(city: City) {
    return this.httpService.getCityWeather(city).pipe(
      tap(cityWeather => this.weather.next(cityWeather))
    );
  }
}
