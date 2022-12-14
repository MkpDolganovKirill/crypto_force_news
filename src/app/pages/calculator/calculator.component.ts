import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { SearchField } from '@pages/crypto-rates/crypto-rates.enums';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { ResourceService } from '@services/resource.service';
import { StoreService } from '@services/store.service';

import { NUMBER_PATTERN } from './calculator.constants';
import { HeadText, LabelText, TableButtonText } from './calculator.enums';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public fieldsArray: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  public cryptoList: CryptoItem[] = [];
  public inputNames: string[] = [];

  public average = 0;
  public totalCount = 0;
  public totalSum = 0;
  public headText = HeadText;
  public searchField = SearchField;
  public numberPattern = NUMBER_PATTERN;
  public tableButtonText = TableButtonText;
  public priceInputLabel = LabelText.SELECT_CRYPTOCURRENCY;

  constructor(private store: StoreService, public resource: ResourceService) {}

  ngOnInit(): void {
    this.store.cryptoList$.subscribe((resp) => (this.cryptoList = resp));
  }

  removeLastField(): void {
    if (this.fieldsArray.length <= 2) return;
    this.fieldsArray.pop();
    this.inputNames.pop();
    this.refreshValues();
  }

  addNewField(): void {
    this.fieldsArray.push([0, 0, 0]);
    this.inputNames.push('');
  }

  refreshValues(): void {
    this.totalSum = 0;
    this.totalCount = 0;
    this.fieldsArray.forEach((element) => {
      if (element[0] < 0) element[0] = 0;
      if (element[1] < 0 || !element[1]) element[1] = 0;
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

  selectCoin(
    index: number,
    name: string,
    value: MatOptionSelectionChange<number>
  ): void {
    if (!value.isUserInput) return;
    this.inputNames[index] = name;
    this.fieldsArray[index][0] = Number(value.source.value.toFixed(2));
    this.refreshValues();
  }

  convertStringToNumber(value: string): number {
    return Number(value);
  }
}
