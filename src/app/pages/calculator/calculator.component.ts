import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public fieldsArray = [[0, 0, 0], [0, 0, 0]];
  public average = 0;
  public totalCount = 0;
  public totalSum = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeLastField() {
    if (this.fieldsArray.length <= 2) return;
    this.fieldsArray.pop();
  }


  addNewField() {
    this.fieldsArray.push([0, 0, 0])
  }

  refreshValues() {
    this.totalSum = 0;
    this.totalCount = 0;
    this.fieldsArray.forEach(element => {
      element[2] = element[0] * element[1];
      this.totalCount += element[1];
      this.totalSum += element[2];
    })
    this.average = this.totalSum / this.totalCount;
    console.log(this.fieldsArray);
  }
}
