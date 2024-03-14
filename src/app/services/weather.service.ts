import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { City } from "../models/app.model";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { ExtendedWeather } from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather = new BehaviorSubject<ExtendedWeather | null>(null);
  city = new BehaviorSubject<City | null>(null);

  get weather$() {
    return this.weather.asObservable();
  }

  get city$() {
    return this.city.asObservable();
  }

  constructor(private httpService: HttpService) { }

  getCityInfo(cityId: number) {
    return this.httpService.getCityById(cityId).pipe(
      tap(city => this.city.next(city))
    );
  }

  getWeatherInfo(city: City): Observable<ExtendedWeather> {
    return this.httpService.getExtendedWeather(city).pipe(
      tap(weather => this.weather.next(weather))
    );
  }

  getCityInfoByCoordinates(lat: number, lon: number) {
    return this.httpService.getCityInfoByCoordinates(lat, lon)
  }

  clearData() {
    this.city.next(null);
    this.weather.next(null);
  }
}
