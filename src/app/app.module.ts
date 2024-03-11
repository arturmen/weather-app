import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import {TuiComboBoxModule, TuiDataListWrapperModule, TuiFilterByInputPipeModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// @ts-ignore
import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {TuiLetModule} from "@taiga-ui/cdk";
import { CitySearchComponent } from './components/city-search/city-search.component';
import { CityTileComponent } from './components/city-tile/city-tile.component';
import {TuiCardModule} from "@taiga-ui/experimental";

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
    TuiCardModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
