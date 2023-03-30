import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from '@material/material.module';

import {EducationComponent} from '@pages/education/education.component';
import {HeaderComponent} from '@components/header/header.component';
import {LeftSideBarComponent} from '@components/left-side-bar/left-side-bar.component';

import {AbsolutePipe} from '@pipes/absolute.pipe';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {CalculatorModule} from "@pages/calculator/calculator.module";
import {CryptoNewsModule} from "@pages/crypto-news/crypto-news.module";
import {CryptoRatesModule} from "@pages/crypto-rates/crypto-rates.module";
import {EducationModule} from "@pages/education/education.module";

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalculatorModule,
    CryptoNewsModule,
    CryptoRatesModule,
    EducationModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
