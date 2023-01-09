import { Pipe, PipeTransform } from '@angular/core';
import { StoreService } from '@services/store.service';

@Pipe({
  name: 'favouriteIcon',
})
export class FavouriteIconPipe implements PipeTransform {
  constructor(private store: StoreService) {}
  transform(value: string, isUserAuthenticated: boolean): string {
    if (!isUserAuthenticated) return 'assets/icons/star-outline-empty.png';
    return this.store.favouriteCoinList$.value.includes(value)
      ? 'assets/icons/star-outline-transparent-filled.png'
      : 'assets/icons/star-outline-empty.png';
  }
}
