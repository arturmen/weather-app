import { Component } from '@angular/core';
import { FavouritesService } from "../../services/favourites.service";
import { of } from "rxjs";

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrl: './favourites-page.component.scss'
})
export class FavouritesPageComponent {

  get favourites$() {
    return of(this.favouritesService.favourites);
  }

  constructor(private favouritesService: FavouritesService) {}


}
