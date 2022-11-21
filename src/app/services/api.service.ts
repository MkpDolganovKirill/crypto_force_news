import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { StoreService } from '@services/store.service';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { environment } from 'src/environments/environment';
import { GET_CALL_LIMIT } from '@constants/api-service.constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, private store: StoreService) {}

  getCryptoInfo() {
    this.httpClient
      .get<CryptoItem[]>(`${environment.backendLink}/crypto/top`, {
        params: {
          limit: GET_CALL_LIMIT,
        },
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((result) => {
        if (!result) return;
        this.store.cryptoList$.next(result);
      });
  }
}
