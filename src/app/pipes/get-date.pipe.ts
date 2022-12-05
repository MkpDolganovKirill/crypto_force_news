import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDate'
})
export class GetDatePipe implements PipeTransform {
  private months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

  transform(value: Date, ...args: unknown[]): unknown {
    return this.months[value.getMonth()] + ' ' + value.getDate();

  }

}
