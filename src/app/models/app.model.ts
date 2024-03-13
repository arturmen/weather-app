export interface City {
  admin1: string,
  admin1_id: number,
  admin2: string,
  admin2_id: number,
  admin3: string,
  admin3_id: number
  country: string,
  country_code: string,
  country_id: number,
  elevation: number,
  feature_code: string,
  id: number,
  latitude: number
  longitude: number,
  name: string,
  population: number
  timezone: string
}

export interface Weather {
  current: WeatherInformation,
  current_units: WeatherUnits,
  elevation: number,
  generationtime_ms: number,
  hourly: WeatherTimelyInformation,
  hourly_units: WeatherUnits,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation: string,
  utc_offset_seconds: number
}

export interface WeatherInformation {
  interval: number,
  temperature_2m: number,
  time: string,
  wind_speed_10m: number
}

export interface WeatherUnits {
  interval?: string,
  temperature_2m: string,
  time: string,
  wind_speed_10m: string,
  relative_humidity_2m?: string,
}

export interface WeatherTimelyInformation {
  relative_humidity_2m: number[],
  temperature_2m: number[],
  time: string[],
  wind_speed_10m: number[]
}

export interface CityResponse {
  generationtime_ms: number,
  results: City[]
}
