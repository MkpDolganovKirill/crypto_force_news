import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GET_CALL_LIMIT } from '@constants/api-service.constants';
import {
  DisplayColumn,
  SearchField,
  TableTitle,
} from '@pages/crypto-rates/crypto-rates.enums';
import { StoreService } from '@services/store.service';

import { CryptoItem } from './interfaces';

@Component({
  selector: 'app-crypto-rates',
  templateUrl: './crypto-rates.component.html',
  styleUrls: ['./crypto-rates.component.scss'],
})
export class CryptoRatesComponent implements OnInit, AfterViewInit {
  public data = new MatTableDataSource<CryptoItem>();
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

  public resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.store.cryptoList$.subscribe((result) => {
      if (!result) return;
      this.cryptoList = result.map((el: CryptoItem, i: number) => {
        return {
          position: i + 1,
          ...el,
        };
      });
      this.resultsLength = GET_CALL_LIMIT;
      this.data.data = this.cryptoList;
    });
  }

  ngAfterViewInit(): void {
    if (!this.paginator) return;
    this.data.paginator = this.paginator;
  }
}
