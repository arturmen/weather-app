import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpService } from "../../services/http.service";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent implements OnInit{
  settingsGroup = new FormGroup({})

  temperatures = ['celsius', 'fahrenheit'];
  speeds = ['kmh', 'ms', 'mph', 'kn'];
  precipitations = ['mm', 'inch']

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.settingsGroup.addControl('temperature', new FormControl(this.httpService.temperature_unit));
    this.settingsGroup.addControl('speed', new FormControl(this.httpService.wind_speed_unit));
    this.settingsGroup.addControl('precipitation', new FormControl(this.httpService.precipitation_unit));
  }

  setUnits() {
    this.httpService.setUnits(
      this.settingsGroup.get('temperature')!.value,
      this.settingsGroup.get('speed')!.value,
      this.settingsGroup.get('precipitation')!.value
    )
  }

}
