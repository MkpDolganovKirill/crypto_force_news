import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CryptoRatesComponent} from "@pages/crypto-rates/crypto-rates.component";

const routes: Routes = [
  {
    path: '',
    component: CryptoRatesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRatesRoutingModule {}
