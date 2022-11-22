import { Component } from '@angular/core';
import { HeaderText, TableButtonText } from './calculator.enums';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  public fieldsArray = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  public average = 0;
  public totalCount = 0;
  public totalSum = 0;

  public headerText = HeaderText;
  public tableButtonText = TableButtonText;

  removeLastField(): void {
    if (this.fieldsArray.length <= 2) return;
    this.fieldsArray.pop();
  }

  addNewField(): void {
    this.fieldsArray.push([0, 0, 0]);
  }

  refreshValues(): void {
    this.totalSum = 0;
    this.totalCount = 0;
    this.fieldsArray.forEach((element) => {
      element[2] = element[0] * element[1];
      this.totalCount += element[1];
      this.totalSum += element[2];
    });
    if (!this.totalCount) {
      this.average = 0;
      return;
    }
    this.average = this.totalSum / this.totalCount;
  }
}
