import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withHashLocation } from '@angular/router';
import { BrowsePageComponent } from "./pages/browse-page/browse-page.component";
import { WeatherPageComponent } from "./pages/weather-page/weather-page.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { DailyComponent } from "./components/weather/daily/daily.component";
import { HourlyComponent } from "./components/weather/hourly/hourly.component";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'hourly',
        pathMatch: 'full'
      },
      {
        path: 'daily',
        component: DailyComponent
      },
      {
        path: 'hourly',
        component: HourlyComponent
      }
    ]
  },
  {
    path: 'browse',
    component: BrowsePageComponent
  },
  {
    path: 'weather/:cityId',
    component: WeatherPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'hourly',
        pathMatch: 'full'
      },
      {
        path: 'daily',
        component: DailyComponent
      },
      {
        path: 'hourly',
        component: HourlyComponent
      }
    ]
  },
  {
    path: 'favourites',
    component: FavouritesPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withHashLocation())]
})
export class AppRoutingModule {}
