import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-city-tile',
  templateUrl: './city-tile.component.html',
  styleUrl: './city-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityTileComponent {
  get item() {
    return this.cityService.city;
  }

  constructor(private cityService: CityService) {
  }

}
