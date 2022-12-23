import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absolute',
})
export class AbsolutePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return Math.abs(<number>value);
  }
}
