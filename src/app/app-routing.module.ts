import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsePageComponent } from "./pages/browse-page/browse-page.component";
import { WeatherPageComponent } from "./pages/weather-page/weather-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'browse',
    pathMatch: 'full'
  },
  {
    path: 'browse',
    component: BrowsePageComponent
  },
  {
    path: 'weather/:lon/:lat',
    component: WeatherPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
