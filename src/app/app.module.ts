import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '@material/material.module';

import { CryptoRatesComponent } from '@pages/crypto-rates/crypto-rates.component';
import { CryptoNewsComponent } from '@pages/crypto-news/crypto-news.component';
import { AboutComponent } from '@pages/about/about.component';
import { CalculatorComponent } from '@pages/calculator/calculator.component';
import { EducationComponent } from '@pages/education/education.component';
import { HeaderComponent } from '@components/header/header.component';
import { LeftSideBarComponent } from '@components/left-side-bar/left-side-bar.component';

import { AbsolutePipe } from '@pipes/absolute.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GetDatePipe } from './pipes/get-date.pipe';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    HeaderComponent,
    CryptoRatesComponent,
    CryptoNewsComponent,
    AboutComponent,
    CalculatorComponent,
    EducationComponent,
    AbsolutePipe,
    GetDatePipe,
    AuthDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
