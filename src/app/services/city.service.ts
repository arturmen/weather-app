import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { BehaviorSubject, tap } from "rxjs";
import { City } from "../models/app.model";
import { Weather } from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  weather = new BehaviorSubject<Weather | null>(null);
  selectedCity = new BehaviorSubject<City | null>(null);
  cities = new BehaviorSubject<City[]>([]);

  get weather$() {
    return this.weather.asObservable();
  }

  get selectedCity$() {
    return this.selectedCity.asObservable();
  }

  get cities$() {
    return this.cities.asObservable();
  }

  constructor(private httpService: HttpService) { }

  getWeather(city: City) {
    return this.httpService.getCityWeather(city).pipe(
      tap(cityWeather => this.weather.next(cityWeather))
    );
  }

  setSelectedCity(city: City) {
    this.selectedCity.next(city);
    this.getWeather(city).subscribe();
    this.getCities(city.name).subscribe();
  }

  getCities(cityName: string) {
    return this.httpService.getCitiesByName(cityName).pipe(
      tap(cities => this.cities.next(cities))
    );
  }

  clearData() {
    this.weather.next(null);
    this.selectedCity.next(null);
    this.cities.next([]);
  }
}
