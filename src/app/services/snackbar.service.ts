import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openSuccess(message?: string): void {
    if (!message) message = 'Неизвестная ошибка';
    this.snackbar.open(message, 'Закрыть', { duration: 2500 });
  }

  openError(message?: string): void {
    if (!message) message = 'Неизвестная ошибка';
    this.snackbar.open(message, 'Закрыть', { duration: 2500 });
  }
}
