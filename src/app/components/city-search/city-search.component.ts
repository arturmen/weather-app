import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, filter, Observable, startWith, Subject, Subscription, switchMap, tap } from "rxjs";
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
export class CitySearchComponent implements OnInit, OnDestroy {
  readonly search$ = new Subject<string | null>();
  readonly stringify = (item: City): string => `${item.name}`;

  items$: Observable<City[]> = this.search$.pipe(
    debounceTime(500),
    filter(value => value !== null),
    switchMap(search =>
      this.httpService.getCitiesByName(search!)
    ),
    startWith([]),
  );

  selectedCity: FormControl<City> = new FormControl();
  subSink: Subscription[] = [];

  constructor(
    private httpService: HttpService,
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    this.subSink.push(
      this.selectedCity.valueChanges.pipe(
        tap(city => this.cityService.setCity(city)),
        switchMap(city => this.cityService.getWeather(city))
      ).subscribe()
    )
  }

  ngOnDestroy() {
    this.subSink.forEach(subscription => subscription.unsubscribe())
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
