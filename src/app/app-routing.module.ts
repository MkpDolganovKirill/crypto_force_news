import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@pages/about/about.component';
import { CalculatorComponent } from '@pages/calculator/calculator.component';
import { CryptoNewsComponent } from '@pages/crypto-news/crypto-news.component';
import { CryptoRatesComponent } from '@pages/crypto-rates/crypto-rates.component';
import { EducationComponent } from '@pages/education/education.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rates',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: CryptoNewsComponent,
  },
  {
    path: 'rates',
    component: CryptoRatesComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
