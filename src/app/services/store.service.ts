import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { CryptoItem } from "../pages/crypto-rates/interfaces";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public cryptoList = new BehaviorSubject<CryptoItem[]>([]);

  constructor() { }
}
