import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs";
import { City } from "../../models/app.model";
import { FavouritesService } from "../../services/favourites.service";

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.scss'
})
export class WeatherPageComponent implements  OnInit {

  constructor(private favouritesService: FavouritesService, private weatherService: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('cityId') as string),
      switchMap(cityId => this.weatherService.getCityInfo(Number(cityId))),
      switchMap((city: City) => this.weatherService.getWeatherInfo(city))
    ).subscribe()
  }
}
