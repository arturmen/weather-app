import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import { map, switchMap, tap } from "rxjs";
import { CityService } from "../../services/city.service";
import { City, CityReversedResponse } from "../../models/app.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  get weather$() {
    return this.weatherService.weather$;
  }

  get city$() {
    return this.weatherService.city$;
  }
  constructor(private weatherService: WeatherService, private cityService: CityService) {
  }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherService.getCityInfoByCoordinates(position.coords.latitude, position.coords.longitude).pipe(
        switchMap((city: CityReversedResponse) => this.cityService.getCities(city.city)),
        map((cities: City[]) => cities[0].id),
        switchMap(cityId => this.weatherService.getCityInfo(Number(cityId))),
        switchMap((city: City) => this.weatherService.getWeatherInfo(city)),
      )
      .subscribe()
    });
  }

}
