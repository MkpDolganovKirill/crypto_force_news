import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public cryptoList = new BehaviorSubject<any>(null);

  constructor() { }
}
