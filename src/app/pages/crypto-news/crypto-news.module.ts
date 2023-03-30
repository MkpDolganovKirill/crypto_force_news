import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CryptoNewsRoutingModule} from "@pages/crypto-news/crypto-news-routing.module";
import {CryptoNewsComponent} from "@pages/crypto-news/crypto-news.component";
import {GetDatePipe} from "@pipes/get-date.pipe";

@NgModule({
  declarations: [
    CryptoNewsComponent,
    GetDatePipe,
  ],
  imports: [
    CommonModule,
    CryptoNewsRoutingModule,
  ],
})
export class CryptoNewsModule {
}
