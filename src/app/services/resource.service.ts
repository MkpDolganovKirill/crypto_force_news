import { Injectable } from '@angular/core';
import { COIN_IMAGE } from '@constants/resource-service.constants';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  getImageLink(value: number): string {
    return `${COIN_IMAGE}${value}.png`;
  }
}
