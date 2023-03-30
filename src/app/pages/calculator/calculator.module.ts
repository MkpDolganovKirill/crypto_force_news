import {NgModule} from '@angular/core';
import {CalculatorComponent} from "@pages/calculator/calculator.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@material/material.module";
import {CalculatorRoutingModule} from "@pages/calculator/calculator-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
  ]
})
export class CalculatorModule {
}
