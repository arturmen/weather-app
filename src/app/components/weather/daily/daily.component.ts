import { Component } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";

@Component({
  selector: 'app-weather-daily',
  templateUrl: './daily.component.html',
  styleUrl: './daily.component.scss'
})
export class DailyComponent {
  get weather$() {
    return this.weatherService.weather$;
  }

  constructor(private weatherService: WeatherService) {}

  protected readonly parseFloat = parseFloat;
}
