import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from '@services/store.service';
import { ResourceService } from '@services/resource.service';
import {
  DisplayColumn,
  IconLink,
  SearchField,
  TableColor,
  TableStyle,
  TableTitle,
} from '@pages/crypto-rates/crypto-rates.enums';
import { CryptoItem } from './interfaces';

@Component({
  selector: 'app-crypto-rates',
  templateUrl: './crypto-rates.component.html',
  styleUrls: ['./crypto-rates.component.scss'],
})
export class CryptoRatesComponent implements OnInit {
  public data: MatTableDataSource<CryptoItem> = new MatTableDataSource();
  public cryptoList: CryptoItem[] = [];
  public displayedColumns = [
    DisplayColumn.NUMBER,
    DisplayColumn.NAME,
    DisplayColumn.PRICE,
    DisplayColumn.ONE_DAY,
    DisplayColumn.SEVEN_DAY,
    DisplayColumn.THIRTY_DAY,
  ];

  public searchField = SearchField;
  public tableTitle = TableTitle;

  constructor(private storeService: StoreService, public resource: ResourceService) {}

  ngOnInit(): void {
    this.storeService.cryptoList$.subscribe((result) => {
      this.cryptoList = result.map((el: CryptoItem, i: number) => {
        return {
          position: i + 1,
          ...el,
        };
      });
      this.data.data = this.cryptoList;
    });
  }

  arrowPath(value: number): IconLink {
    return value < 0 ? IconLink.RED_ARROW : IconLink.GREEN_ARROW;
  }

  getRotate(value: number): TableStyle | '' {
    return value < 0 ? '' : TableStyle.ROTATE;
  }

  getColor(value: number): TableColor {
    return value < 0 ? TableColor.RED : TableColor.GREEN;
  }
}
