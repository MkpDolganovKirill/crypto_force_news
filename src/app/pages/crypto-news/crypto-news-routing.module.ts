import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CryptoNewsComponent} from "@pages/crypto-news/crypto-news.component";

const routes: Routes = [
  {
    path: '',
    component: CryptoNewsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoNewsRoutingModule {}
