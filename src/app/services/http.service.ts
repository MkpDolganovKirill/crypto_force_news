import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public readonly MAIN_DOMAIN_API = 'https://pro-api.coinmarketcap.com';
  public readonly GET_ALL_CRYPTO_LIST = '/v1/cryptocurrency/listings/latest';


  constructor() { }

}
