import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  Observable,
  startWith,
  Subject,
  Subscription,
  switchMap,
  tap
} from "rxjs";
import { FormControl } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { CityService } from "../../services/city.service";
import { City } from "../../models/app.model";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySearchComponent {
  readonly search$ = new BehaviorSubject<string | null>(null);
  readonly stringify = (item: City): string => `${item.name}`;

  items$: Observable<City[]> = this.search$.pipe(
    debounceTime(500),
    filter(value => value !== null),
    switchMap(search =>
      this.httpService.getCitiesByName(search!)
    ),
    startWith([]),
  );

  noResults = new BehaviorSubject(false);

  selectedCity: FormControl<City> = new FormControl();

  constructor(
    private httpService: HttpService,
    private cityService: CityService
  ) {
  }

  setSelectedCity() {
    if (this.selectedCity.value) {
      this.cityService.setSelectedCity(this.selectedCity.value)
    } else {
      this.cityService.getCities(this.search$.value ?? '').subscribe(cities => {
        if (cities.length === 0) {
          this.noResults.next(true);
        }
      })
    }
  }

  onSearchChange(searchQuery: string | null): void {
    this.noResults.next(false);
    this.search$.next(searchQuery);
    this.cityService.selectedCity.next(null);
  }

  extractValueFromEvent(event: Event | null): string | null {
    if (!event) {
      return null;
    }
    return (event.target as HTMLInputElement)?.value || null;
  }
}
