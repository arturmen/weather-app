import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { City, CityResponse, ExtendedWeather, Weather } from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  temperature_unit = 'celsius';
  wind_speed_unit = 'kmh';
  precipitation_unit = 'mm'

  constructor(private http: HttpClient) {
    if (localStorage.getItem('settings')) {
      const parsed = JSON.parse(localStorage.getItem('settings') ?? '{}');
      if (parsed) {
        this.temperature_unit = parsed.temperature_unit;
        this.wind_speed_unit = parsed.wind_speed_unit;
        this.precipitation_unit = parsed.precipitation_unit;
      }
    }
  }

  getCitiesByName(cityName: string): Observable<City[]> {
    return this.http.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=6&language=en&format=json`)
      .pipe(
        map(itemsWrapper  => {
          return (itemsWrapper as CityResponse).results
        }),
        map(results => results ? results : [])
    )
  }

  getCityWeather(city: City): Observable<Weather> {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&temperature_unit=${this.temperature_unit}&wind_speed_unit=${this.wind_speed_unit}&precipitation_unit=${this.precipitation_unit}&timezone=auto`) as Observable<Weather>;
  }

  getCityById(cityId: number): Observable<City> {
    return this.http.get(`https://geocoding-api.open-meteo.com/v1/get?id=${cityId}`) as Observable<City>;
  }

  getExtendedWeather(city: City): Observable<ExtendedWeather> {
    return this.http.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,pressure_msl,surface_pressure,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,uv_index_clear_sky,is_day,cape,freezing_level_height,sunshine_duration&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&forecast_days=16&forecast_hours=24&temperature_unit=${this.temperature_unit}&wind_speed_unit=${this.wind_speed_unit}&precipitation_unit=${this.precipitation_unit}&timezone=auto`
    ) as Observable<ExtendedWeather>;
  }

  getCityInfoByCoordinates(lat: number, lon: number) {
    return this.http.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
  }

  setUnits(temperature: string | null, speed: string | null, precipitation: string | null) {
    this.temperature_unit = temperature ?? 'celsius';
    this.wind_speed_unit = speed ?? 'kmh';
    this.precipitation_unit = precipitation ?? 'mm';

    localStorage.setItem('settings', JSON.stringify({
      'temperature_unit': this.temperature_unit,
      'wind_speed_unit': this.wind_speed_unit,
      'precipitation_unit': this.precipitation_unit
    }))
  }
}
