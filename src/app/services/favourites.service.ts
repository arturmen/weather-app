import { Injectable, OnInit } from '@angular/core';
import { City } from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favourites: City[] = [];
  favouritesIds: Set<number> = new Set<number>()

  constructor() {
    if (localStorage.getItem('favourites')) {
      const parsedArray = JSON.parse(localStorage.getItem('favourites') ?? '[]');
      this.favourites = parsedArray ? parsedArray : [];
      this.favourites.forEach(favouriteCity => this.favouritesIds.add(favouriteCity.id));
    }
  }

  toggleFavourites(city: City) {
    if (this.favouritesIds.has(city.id)) {
      this.removeFromFavourites(city);
    } else {
      this.addToFavourites(city);
    }
    localStorage.setItem('favourites', JSON.stringify(this.favourites))
  }

  removeFromFavourites(city: City) {
    const index = this.favourites.findIndex(favouriteCity => city.id === favouriteCity.id);
    if (index > -1) {
      this.favourites.splice(index, 1);
    }
    this.favouritesIds.delete(city.id);
  }

  addToFavourites(city: City) {
    this.favourites.push(city);
    this.favouritesIds.add(city.id);
  }
}
