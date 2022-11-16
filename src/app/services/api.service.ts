import { Injectable } from '@angular/core';
import { catchError, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { StoreService } from "./store.service";
import { environment } from 'src/environments/environment';
import { CryptoItem } from "../pages/crypto-rates/interfaces";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private store: StoreService) { }

  getCryptoInfo() {
    this.httpClient.get<CryptoItem[]>(`${environment.backendLink}/crypto/top`, {
     params: {
       limit: 1000
     }
    })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((result) => {
        if (!result) return;
        this.store.cryptoList.next(result);
      })
  }
}
