import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settings'
})
export class SettingsPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'celsius':
        return 'Celsius °C';
      case 'fahrenheit':
        return 'Fahrenheit °F';
      case 'kmh':
        return 'Km/h'
      case 'ms':
        return 'm/s';
      case 'mph':
        return 'Mph';
      case 'kn':
        return 'Knots';
      case 'mm':
        return 'Millimeter';
      case 'inch':
        return 'Inch';
      default:
        return ''
    }
  }

}
