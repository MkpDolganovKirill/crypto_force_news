import { Pipe, PipeTransform } from '@angular/core';
import { IconLink } from '@pages/crypto-rates/crypto-rates.enums';

@Pipe({
  name: 'arrowPath',
})
export class ArrowPathPipe implements PipeTransform {
  transform(value: number): IconLink {
    return value < 0 ? IconLink.RED_ARROW : IconLink.GREEN_ARROW;
  }
}
