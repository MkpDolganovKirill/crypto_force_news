import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-crypto-rates',
  templateUrl: './crypto-rates.component.html',
  styleUrls: ['./crypto-rates.component.scss']
})
export class CryptoRatesComponent implements OnInit {
  public data: any = [];
  public displayedColumns = ['number', 'name', 'price', '1_day_percent', '7_days_percent']

  constructor(private httpClient: HttpClient, private store: StoreService) {
  }

  ngOnInit(): void {
    this.store.cryptoList.subscribe(result => {
      if (!result) return;
      this.data = result.map((el: any, i: number) => {
        return {
          position: i + 1,
          ...el,
        }
      });
      console.log(this.data);
    })
  }

}
