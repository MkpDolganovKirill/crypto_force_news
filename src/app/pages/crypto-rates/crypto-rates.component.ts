import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";

@Component({
  selector: 'app-crypto-rates',
  templateUrl: './crypto-rates.component.html',
  styleUrls: ['./crypto-rates.component.scss']
})
export class CryptoRatesComponent implements OnInit {
  public data: any = [];
  public displayedColumns = ['Логотип', 'Название', 'Цена', '1 день', '7 дней']

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(`http://localhost:8080/get/list`)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((result) => {
        if (!result) return;
        // @ts-ignore
        this.data = result.data;
        console.log(result);
      })
  }

}
