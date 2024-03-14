import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FavouritesService } from "../../services/favourites.service";
import { City } from "../../models/app.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  expanded: boolean = false;

  get favourites() {
    return this.favouritesService.favourites;
  }

  constructor(private router: Router, private favouritesService: FavouritesService) {
  }

  getRouterLink(city: City) {
    return `/weather/${city.id}`
  }
}
