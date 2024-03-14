import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowsePageComponent } from "./pages/browse-page/browse-page.component";
import { CitySearchComponent } from "./components/city-search/city-search.component";
import { CityTileComponent } from "./components/city-tile/city-tile.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { WeatherPageComponent } from "./pages/weather-page/weather-page.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CurrentComponent } from "./components/weather/current/current.component";
import { DailyComponent } from "./components/weather/daily/daily.component";
import { HourlyComponent } from "./components/weather/hourly/hourly.component";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { WeatherModelComponent } from "./components/weather/weather-model/weather-model.component";
import { WeatherCardComponent } from "./components/weather/weather-card/weather-card.component";
import { SettingsPipe } from "./pages/settings-page/settings.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiAlertModule, TuiDataListModule,
  TuiDialogModule, TuiDropdownModule, TuiExpandModule, TuiHintModule, TuiHostedDropdownModule, TuiLinkModule,
  TuiNotificationModule,
  TuiRootModule, TuiSvgModule,
  TuiTextfieldControllerModule, TuiTooltipModule
} from "@taiga-ui/core";
import {
  TuiAccordionModule,
  TuiBreadcrumbsModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule, TuiSelectModule,
  TuiTabsModule,
  TuiToggleModule
} from "@taiga-ui/kit";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TuiLetModule, TuiPlatformModule, TuiRepeatTimesModule } from "@taiga-ui/cdk";
import {
  TuiAppBarModule,
  TuiAppearanceModule,
  TuiBadgeModule,
  TuiButtonCloseModule,
  TuiButtonModule,
  TuiCardModule, TuiCellModule, TuiFadeModule,
  TuiIconModule, TuiNavigationModule,
  TuiSurfaceModule,
  TuiThumbnailCardModule,
  TuiTitleModule
} from "@taiga-ui/experimental";
import { CommonModule } from "@angular/common";
import { TuiRippleModule, TuiTabBarModule } from "@taiga-ui/addon-mobile";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });
});
