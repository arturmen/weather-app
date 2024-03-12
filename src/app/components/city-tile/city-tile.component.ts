import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CityService } from "../../services/city.service";

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrl: './city-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityTileComponent {
  get city$() {
    return this.cityService.city$;
  }
  get weather$() {
    return this.cityService.weather$;
  }

  constructor(public cityService: CityService) {
  }
}
