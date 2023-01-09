import { Pipe, PipeTransform } from '@angular/core';
import { COIN_IMAGE } from '@constants/resource-service.constants';

@Pipe({
  name: 'toLink',
})
export class ToLinkPipe implements PipeTransform {
  transform(value: number): string {
    return `${COIN_IMAGE}${value}.png`;
  }
}
