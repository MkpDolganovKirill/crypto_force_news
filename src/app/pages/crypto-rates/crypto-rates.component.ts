import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GET_CALL_LIMIT } from '@constants/api-service.constants';
import {
  DisplayColumn,
  SearchField,
  TableTitle,
} from '@pages/crypto-rates/crypto-rates.enums';
import { AuthService } from '@services/auth.service';
import { SnackbarService } from '@services/snackbar.service';
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
  public isUserAuthenticated = false;

  public displayedColumns = [
    DisplayColumn.NUMBER,
    DisplayColumn.NAME,
    DisplayColumn.PRICE,
    DisplayColumn.ONE_DAY,
    DisplayColumn.SEVEN_DAY,
    DisplayColumn.THIRTY_DAY,
    DisplayColumn.ACTIONS,
  ];

  public searchField = SearchField;
  public tableTitle = TableTitle;
  public favouriteCoinList: string[] = [];
  public resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private authService: AuthService,
    private store: StoreService,
    private snack: SnackbarService
  ) {}

  ngOnInit(): void {
    this.authService.isUserAuthenticated.subscribe((result) => {
      if (!result) return;
      this.isUserAuthenticated = result;
    });
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
    this.store.favouriteCoinList$.subscribe((result) => {
      if (!result) return;
      this.favouriteCoinList = result;
    });
  }

  ngAfterViewInit(): void {
    if (!this.paginator) return;
    this.data.paginator = this.paginator;
  }

  addCoinToFavourites(name: string): void {
    const prevList = this.store.favouriteCoinList$.getValue();
    const newList = [...prevList, name];
    this.store.favouriteCoinList$.next(newList);
  }
  openErrorSnackbar(message: string): void {
    this.snack.openError(message);
  }
}
