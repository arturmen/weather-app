import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-model',
  templateUrl: './weather-model.component.html',
  styleUrl: './weather-model.component.scss',
  host: {'[class.small]':'small'}
})
export class WeatherModelComponent {
  @Input()
  small = false;

  @Input()
  set weatherCode(code: number) {
    this.weatherCodeName = this.getWeatherCodeName(code);
    this.weatherIconName = this.getWeatherIconName(code);
  }

  weatherCodeName: string = '';
  weatherIconName: string = '';


  getWeatherCodeName(weatherCode: number): string {
    switch(weatherCode) {
      case 0:
        return 'Clear sky'
      case 1:
        return 'Mainly clear'
      case 2:
        return 'Partly cloudy'
      case 3:
        return 'Overcast'
      case 45:
        return 'Fog'
      case 48:
        return 'Depositing rime fog'
      case 51:
        return 'Light drizzle'
      case 53:
        return 'Moderate drizzle'
      case 55:
        return 'Dense drizzle'
      case 56:
        return 'Light freezing drizzle'
      case 57:
        return 'Dense freezing drizzle'
      case 61:
        return 'Slight rain'
      case 63:
        return 'Moderate rain'
      case 65:
        return 'Heavy rain'
      case 66:
        return 'Light freezing rain'
      case 67:
        return 'Heavy freezing rain'
      case 71:
        return 'Slight snow fall'
      case 73:
        return 'Moderate snow fall'
      case 75:
        return 'Heavy snow fall'
      case 77:
        return 'Snow grains'
      case 80:
        return 'Slight rain shower'
      case 81:
        return 'Moderate rain shower'
      case 82:
        return 'Violent rain shower'
      case 85:
        return 'Light snow shower'
      case 86:
        return 'Heavy snow shower'
      case 95:
        return 'Thunderstorm'
      case 96:
        return 'Thunderstorm with slight hail'
      case 99:
        return 'Thunderstorm with heavy hail'
      default:
        return 'Cloudy'
    }
  }

  getWeatherIconName(weatherCode: number): string {
    switch(weatherCode) {
      case 0:
        return 'tuiIconSun'
      case 1:
        return 'tuiIconSun'
      case 2:
        return 'tuiIconCloud'
      case 3:
        return 'tuiIconCloud'
      case 45:
        return 'tuiIconCloud'
      case 48:
        return 'tuiIconCloud'
      case 51:
        return 'tuiIconCloudDrizzle'
      case 53:
        return 'tuiIconCloudDrizzle'
      case 55:
        return 'tuiIconCloudDrizzle'
      case 56:
        return 'tuiIconCloudDrizzle'
      case 57:
        return 'tuiIconCloudDrizzle'
      case 61:
        return 'tuiIconCloudRain'
      case 63:
        return 'tuiIconCloudRain'
      case 65:
        return 'tuiIconCloudRain'
      case 66:
        return 'tuiIconCloudRain'
      case 67:
        return 'tuiIconCloudRain'
      case 71:
        return 'tuiIconCloudSnow'
      case 73:
        return 'tuiIconCloudSnow'
      case 75:
        return 'tuiIconCloudSnow'
      case 77:
        return 'tuiIconCloudSnow'
      case 80:
        return 'tuiIconCloudRain'
      case 81:
        return 'tuiIconCloudRain'
      case 82:
        return 'tuiIconCloudRain'
      case 85:
        return 'tuiIconCloudSnow'
      case 86:
        return 'tuiIconCloudSnow'
      case 95:
        return 'tuiIconCloudLightning'
      case 96:
        return 'tuiIconCloudLightning'
      case 99:
        return 'tuiIconCloudLightning'
      default:
        return 'tuiIconCloud'
    }
  }

}
