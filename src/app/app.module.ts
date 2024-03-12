import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule,
  TuiNotificationModule,
  TuiSvgModule,
  TuiHintModule,
  TuiButtonModule, TuiHostedDropdownModule, TuiDataListModule, TuiLinkModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import { NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import { HttpClientModule } from "@angular/common/http";
import { TuiLetModule, TuiPlatformModule, TuiRepeatTimesModule } from "@taiga-ui/cdk";
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CityTileComponent } from './components/city-tile/city-tile.component';
import {
  TuiButtonCloseModule,
  TuiCardModule, TuiCellModule,
  TuiIconModule,
  TuiSurfaceModule, TuiThumbnailCardModule, TuiTitleModule
} from "@taiga-ui/experimental";
import { CommonModule } from "@angular/common";
import { TuiRippleModule } from "@taiga-ui/addon-mobile";

@NgModule({
  declarations: [
    AppComponent,
    BrowsePageComponent,
    CitySearchComponent,
    CityTileComponent
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
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
