import { Component, OnDestroy } from '@angular/core';
import { FavouritesService } from "../../../services/favourites.service";
import { WeatherService } from "../../../services/weather.service";
import { AdministrationProperty, City } from "../../../models/app.model";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss'
})
export class WeatherCardComponent implements OnDestroy {
  get city$() {
    return this.weatherService.city$;
  }

  get favourites() {
    return this.favouritesService.favouritesIds;
  }

  constructor(private favouritesService: FavouritesService, private weatherService: WeatherService) {}

  getAdministrationInfo(city: City) {
    let infoText = city.country;
    const properties: AdministrationProperty[] = ['admin1', 'admin2', 'admin3']
    properties.forEach((property: AdministrationProperty) => {
      if (city[property]) {
        infoText = `${infoText}, ${city[property]}`
      }
    })
    return infoText;
  }

  toggleFavourites(city: City) {
    this.favouritesService.toggleFavourites(city);
  }

  ngOnDestroy() {
    this.weatherService.clearData();
  }
}
