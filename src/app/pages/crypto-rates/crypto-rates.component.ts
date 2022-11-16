import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { StoreService } from "../../services/store.service";
import { CryptoItem } from "./interfaces";

@Component({
  selector: 'app-crypto-rates',
  templateUrl: './crypto-rates.component.html',
  styleUrls: ['./crypto-rates.component.scss']
})
export class CryptoRatesComponent implements OnInit {
  public data = new MatTableDataSource<CryptoItem>();
  public displayedColumns = ['number', 'name', 'price', '1_day_percent', '7_days_percent', '30_days_percent'];

  arrowPath(value: number): string {
    return value < 0 ? `assets/icons/arrow_red.svg` : `assets/icons/arrow_green.svg`;
  }

  getRotate(value: number): string {
    return value < 0 ? '' : 'rotate';
  }

  getColor(value: number): string {
    return value < 0 ? 'red' : 'green'
  }


  constructor(public store: StoreService) {
  }

  ngOnInit(): void {
    this.store.cryptoList.subscribe(result => {
      if (!result) return;
      this.data.data = result.map((el: CryptoItem, i: number) => {
        return {
          position: i + 1,
          ...el,
        }
      });
    })
  }

}
