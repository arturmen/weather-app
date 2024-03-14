import { Component } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";

@Component({
  selector: 'app-weather-current',
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss'
})
export class CurrentComponent {
  get weather$() {
    return this.weatherService.weather$;
  }

  constructor(private weatherService: WeatherService) {
  }

}
