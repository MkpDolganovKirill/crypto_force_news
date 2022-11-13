import { Injectable } from '@angular/core';
import { catchError, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { StoreService } from "./store.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private store: StoreService) { }

  getCryptoInfo() {
    this.httpClient.get(`http://localhost:3000/crypto/top`, {
     params: {
       limit: 100
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
        // @ts-ignore
        this.store.cryptoList.next(result);
      })
  }
}
