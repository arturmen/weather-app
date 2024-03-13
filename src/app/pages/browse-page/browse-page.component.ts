import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CityService } from "../../services/city.service";

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrl: './browse-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowsePageComponent {

  get selectedCity$() {
    return this.cityService.selectedCity$;
  }

  get cities$() {
    return this.cityService.cities$;
  }

  get weather$() {
    return this.cityService.weather$;
  }

  constructor(private cityService: CityService) {
  }
}
