import {ChangeDetectionStrategy, Component} from '@angular/core';
import {debounceTime, filter, Observable, startWith, Subject, switchMap} from "rxjs";
import {FormControl} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySearchComponent {
  readonly search$ = new Subject<string | null>();

  items$: Observable<any> = this.search$.pipe(
    debounceTime(500),
    filter(value => value !== null),
    switchMap(search =>
      this.httpService.getCitiesByName(search!)
    ),
    startWith([]),
  );

  readonly stringify = (item: any): string => `${item.name}`;

  selectedCity = new FormControl({ name: '' });

  constructor(private httpService: HttpService,
              private cityService: CityService) {
    this.selectedCity.valueChanges.subscribe(value => {
      this.cityService.getCityData(value)
    })
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  extractValueFromEvent(event: Event | null): string | null {
    if (!event) {
      return null;
    }
    return (event.target as HTMLInputElement)?.value || null;
  }
}
