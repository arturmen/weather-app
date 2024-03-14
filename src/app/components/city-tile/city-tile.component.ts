import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdministrationProperty, City, Weather } from "../../models/app.model";
import { FavouritesService } from "../../services/favourites.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrl: './city-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityTileComponent {

  @Input()
  city!: City;

  @Input()
  weather: Weather | null = null;

  get favourites() {
    return this.favouritesService.favouritesIds;
  }

  constructor(private favouritesService: FavouritesService, private router: Router) {}

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

  getRouterLink(city: City) {
    return `/weather/${city.id}`;
  }

  toggleFavourites(city: City) {
    this.favouritesService.toggleFavourites(city);
  }

  goToWeatherDetails(city: City) {
    this.router.navigateByUrl(this.getRouterLink(city))
  }
}
