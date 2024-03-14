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

export interface CityReversedResponse {
  city: string,
  continent: string,
  continentCode: string,
  countryCode: string,
  countryName: string,
  latitude: number,
  locality: string,
  localityInfo: Object,
  localityLanguageRequested: string,
  longitude: number,
  lookupSource: string,
  plusCode: string,
  postcode: string,
  principalSubdivision: string,
  principalSubdivisionCode: string,
}

export interface CityResponse {
  generationtime_ms: number,
  results: City[]
}

export type AdministrationProperty = 'admin1' | 'admin2' | 'admin3';

