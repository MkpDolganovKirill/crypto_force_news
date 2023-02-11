import { Pipe, PipeTransform } from '@angular/core';
import { TableStyle } from '@pages/crypto-rates/crypto-rates.enums';

@Pipe({
  name: 'rotate',
})
export class RotatePipe implements PipeTransform {
  transform(value: number): string {
    return value < 0 ? '' : TableStyle.ROTATE;
  }
}
