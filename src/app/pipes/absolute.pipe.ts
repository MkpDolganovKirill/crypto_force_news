import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absolute',
})
export class AbsolutePipe implements PipeTransform {
  transform(value: unknown): number {
    return Math.abs(<number>value);
  }
}
