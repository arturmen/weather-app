import { Component } from '@angular/core';
import { WeatherService } from "../../../services/weather.service";

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './hourly.component.html',
  styleUrl: './hourly.component.scss'
})
export class HourlyComponent {
  get weather$() {
    return this.weatherService.weather$;
  }

  constructor(private weatherService: WeatherService) {}

  isTomorrow(date: string) {
    let today = new Date().getDay();
    let dateDay = new Date(date).getDay();
    return dateDay > today || dateDay < today - 15
  }
}
