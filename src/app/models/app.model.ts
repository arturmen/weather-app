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

export interface ExtendedWeather extends Weather {
  current: ExtendedCurrent,
  current_units: ExtendedCurrentUnits,
  daily: ExtendedDaily,
  daily_units: ExtendedDailyUnits,
  hourly: ExtendedHourly,
  hourly_units: ExtendedHourlyUnits
}

export interface ExtendedCurrent extends WeatherInformation {
  relative_humidity_2m: number,
  apparent_temperature: number,
  is_day: number,
  precipitation: number,
  rain: number,
  showers: number,
  snowfall: number,
  weather_code: number,
  cloud_cover: number,
  pressure_msl: number,
  surface_pressure: number,
  wind_direction_10m: number,
  wind_gusts_10m: number,
  wind_speed_10m: number,
}

export interface ExtendedCurrentUnits {
  apparent_temperature: string,
  cloud_cover: string,
  interval: string,
  is_day: string,
  precipitation: string,
  pressure_msl: string,
  rain: string,
  relative_humidity_2m: string,
  showers: string,
  snowfall: string,
  surface_pressure: string,
  temperature_2m: string,
  time: string,
  weather_code: string,
  wind_direction_10m: string,
  wind_gusts_10m: string,
  wind_speed_10m: string,
}

export interface ExtendedHourly extends WeatherTimelyInformation{
  dew_point_2m: number[],
  apparent_temperature: number[],
  precipitation_probability: number[],
  precipitation: number[],
  rain: number[],
  showers: number[],
  snowfall: number[],
  snow_depth: number[],
  weather_code: number[],
  pressure_msl: number[],
  surface_pressure: number[],
  cloud_cover: number[],
  cloud_cover_low: number[],
  cloud_cover_mid: number[],
  cloud_cover_high: number[],
  visibility: number[],
  wind_direction_10m: number[],
  wind_gusts_10m: number[],
  wind_speed_10m: number[],
  uv_index: number[],
  uv_index_clear_sky: number[],
  is_day: number[],
  cape: number[],
  freezing_level_height: number[],
  sunshine_duration: number[],
  relative_humidity_2m: number[]
}

export interface ExtendedHourlyUnits {
  apparent_temperature: string,
  cape: string,
  cloud_cover: string,
  cloud_cover_high: string,
  cloud_cover_low: string,
  cloud_cover_mid: string,
  dew_point_2m: string,
  freezing_level_height: string,
  is_day: string,
  precipitation: string,
  precipitation_probability: string,
  pressure_msl: string,
  rain: string,
  relative_humidity_2m: string,
  showers: string,
  snow_depth: string,
  snowfall: string,
  sunshine_duration: string,
  surface_pressure: string,
  temperature_2m: string,
  time: string,
  uv_index: string,
  uv_index_clear_sky: string,
  visibility: string,
  weather_code: string,
  wind_direction_10m: string,
  wind_gusts_10m: string,
  wind_speed_10m: string,
}

export interface ExtendedDaily extends WeatherTimelyInformation {
  weather_code: number[],
  temperature_2m_max: number[],
  temperature_2m_min: number[],
  apparent_temperature_max: number[],
  apparent_temperature_min: number[],
  sunrise: string[],
  sunset: string[],
  daylight_duration: number[],
  sunshine_duration: number[],
  uv_index_max: number[],
  uv_index_clear_sky_max: number[],
  precipitation_sum: number[],
  rain_sum: number[],
  showers_sum: number[],
  snowfall_sum: number[],
  precipitation_hours: number[],
  precipitation_probability_max: number[],
  wind_speed_10m_max: number[],
  wind_gusts_10m_max: number[],
  wind_direction_10m_dominant: number[],
  shortwave_radiation_sum: number[],
  et0_fao_evapotranspiration: number[],
}

export interface ExtendedDailyUnits {
  apparent_temperature_max: string,
  apparent_temperature_min: string,
  daylight_duration: string,
  et0_fao_evapotranspiration: string,
  precipitation_hours: string,
  precipitation_probability_max: string,
  precipitation_sum: string,
  rain_sum: string,
  shortwave_radiation_sum: string,
  showers_sum: string,
  snowfall_sum: string,
  sunrise: string,
  sunset: string,
  sunshine_duration: string,
  temperature_2m_max: string,
  temperature_2m_min: string,
  time: string,
  uv_index_clear_sky_max: string,
  uv_index_max: string,
  weather_code: string,
  wind_direction_10m_dominant: string,
  wind_gusts_10m_max: string,
  wind_speed_10m_max: string,
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

export type AdministrationProperty = 'admin1' | 'admin2' | 'admin3';

