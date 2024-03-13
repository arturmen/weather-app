import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { City, Weather } from "../../models/app.model";
import { FavouritesService } from "../../services/favourites.service";

type AdministrationProperty = 'admin1' | 'admin2' | 'admin3';

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

  constructor(private favouritesService: FavouritesService) {}

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
    return `/weather/${city.longitude}/${city.latitude}`
  }

  toggleFavourites(city: City) {
    this.favouritesService.toggleFavourites(city)
  }
}
