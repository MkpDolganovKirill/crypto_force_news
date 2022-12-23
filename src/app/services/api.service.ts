import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_CALL_LIMIT } from '@constants/api-service.constants';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { StoreService } from '@services/store.service';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

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
        catchError(() => {
          return of(null);
        })
      )
      .subscribe((result) => {
        if (!result) return;
        this.store.cryptoList$.next(result);
      });
  }
}
