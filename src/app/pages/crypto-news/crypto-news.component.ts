import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.scss'],
})
export class CryptoNewsComponent implements OnInit {
  public date2 = new Date((new Date()).setDate((new Date()).getDate() - 2));
  public date3 = new Date((new Date()).setDate((new Date()).getDate() - 3));
  public date4 = new Date((new Date()).setDate((new Date()).getDate() - 4));
  public date5 = new Date((new Date()).setDate((new Date()).getDate() - 5));
  public selectedDate = 0;

  constructor() {}

  ngOnInit(): void {}

  getLabelClassName(index: number): string {
    return this.selectedDate === index ? 'date-active' : 'date';
  }

  changeSelection(index: number) {
    this.selectedDate = index;
  }
}
