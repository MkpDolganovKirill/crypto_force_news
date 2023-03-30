import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoRatesComponent } from "@pages/crypto-rates/crypto-rates.component";
import { EducationComponent } from "@pages/education/education.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rates',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () => import('@pages/crypto-news/crypto-news.module').then((m) => m.CryptoNewsModule),
  },
  {
    path: 'rates',
    loadChildren: () => import('@pages/crypto-rates/crypto-rates.module').then((m) => m.CryptoRatesModule),
  },
  {
    path: 'calculator',
    loadChildren: () => import('@pages/calculator/calculator.module').then(m => m.CalculatorModule),
  },
  {
    path: 'education',
    loadChildren: () => import('@pages/education/education.module').then(m => m.EducationModule),
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
