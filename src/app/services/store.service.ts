import { Injectable } from '@angular/core';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public cryptoList$ = new BehaviorSubject<CryptoItem[]>([]);
}
