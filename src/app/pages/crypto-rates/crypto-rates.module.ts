import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CryptoRatesComponent} from "@pages/crypto-rates/crypto-rates.component";
import {CryptoRatesRoutingModule} from "@pages/crypto-rates/crypto-rates-routing.module";
import {MaterialModule} from "@material/material.module";
import {AbsolutePipe} from "@pipes/absolute.pipe";

@NgModule({
  declarations: [
    CryptoRatesComponent,
    AbsolutePipe
  ],
  imports: [
    CommonModule,
    CryptoRatesRoutingModule,
    MaterialModule,
  ],
})
export class CryptoRatesModule {
}
