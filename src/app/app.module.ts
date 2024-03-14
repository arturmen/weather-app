import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TUI_SANITIZER,
    TuiTextfieldControllerModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiHintModule,
    TuiHostedDropdownModule, TuiDataListModule, TuiLinkModule, TuiDropdownModule, TuiExpandModule, TuiTooltipModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import {
  TuiAccordionModule,
  TuiBreadcrumbsModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule, TuiSelectModule, TuiTabsModule, TuiToggleModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import { NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import { HttpClientModule } from "@angular/common/http";
import { TuiLetModule, TuiPlatformModule, TuiRepeatTimesModule } from "@taiga-ui/cdk";
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CityTileComponent } from './components/city-tile/city-tile.component';
import {
  TuiAppBarModule,
  TuiAppearanceModule,
  TuiBadgeModule,
  TuiButtonCloseModule, TuiButtonModule,
  TuiCardModule, TuiCellModule, TuiFadeModule,
  TuiIconModule, TuiNavigationModule,
  TuiSurfaceModule, TuiThumbnailCardModule, TuiTitleModule
} from "@taiga-ui/experimental";
import { CommonModule } from "@angular/common";
import { TuiRippleModule, TuiTabBarModule } from "@taiga-ui/addon-mobile";
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurrentComponent } from './components/weather/current/current.component';
import { DailyComponent } from './components/weather/daily/daily.component';
import { HourlyComponent } from './components/weather/hourly/hourly.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { WeatherModelComponent } from './components/weather/weather-model/weather-model.component';
import { WeatherCardComponent } from './components/weather/weather-card/weather-card.component';
import { SettingsPipe } from './pages/settings-page/settings.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrowsePageComponent,
    CitySearchComponent,
    CityTileComponent,
    NavigationComponent,
    WeatherPageComponent,
    FavouritesPageComponent,
    HomePageComponent,
    CurrentComponent,
    DailyComponent,
    HourlyComponent,
    SettingsPageComponent,
    WeatherModelComponent,
    WeatherCardComponent,
    SettingsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiFilterByInputPipeModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiTextfieldControllerModule,
    TuiLetModule,
    TuiCardModule,
    CommonModule,
    TuiNotificationModule,
    TuiSurfaceModule,
    TuiSvgModule,
    TuiTitleModule,
    TuiHintModule,
    FormsModule,
    TuiRippleModule,
    TuiThumbnailCardModule,
    TuiIconModule,
    TuiButtonModule,
    TuiCellModule,
    TuiRepeatTimesModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiButtonCloseModule,
    TuiPlatformModule,
    TuiLinkModule,
    TuiTabsModule,
    TuiNavigationModule,
    TuiDropdownModule,
    TuiExpandModule,
    TuiCardModule,
    TuiToggleModule,
    TuiBreadcrumbsModule,
    TuiFadeModule,
    TuiBadgeModule,
    TuiAppearanceModule,
    TuiAccordionModule,
    TuiSelectModule,
    TuiTooltipModule,
    TuiTabBarModule,
    TuiAppBarModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
