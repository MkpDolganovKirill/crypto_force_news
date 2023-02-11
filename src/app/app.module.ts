import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDialogComponent } from '@components/auth-dialog/auth-dialog.component';
import { HeaderComponent } from '@components/header/header.component';
import { LeftSideBarComponent } from '@components/left-side-bar/left-side-bar.component';
import { MaterialModule } from '@material/material.module';
import { AboutComponent } from '@pages/about/about.component';
import { CalculatorComponent } from '@pages/calculator/calculator.component';
import { CryptoNewsComponent } from '@pages/crypto-news/crypto-news.component';
import { CryptoRatesComponent } from '@pages/crypto-rates/crypto-rates.component';
import { EducationComponent } from '@pages/education/education.component';
import { AbsolutePipe } from '@pipes/absolute.pipe';
import { ArrowPathPipe } from '@pipes/arrow-path.pipe';
import { FixedPipe } from '@pipes/fixed.pipe';
import { GetDatePipe } from '@pipes/get-date.pipe';
import { RotatePipe } from '@pipes/rotate.pipe';
import { ToLinkPipe } from '@pipes/to-link.pipe';
import { ToNumberPipe } from '@pipes/to-number.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    ToLinkPipe,
    FixedPipe,
    ArrowPathPipe,
    RotatePipe,
    ToNumberPipe,
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
