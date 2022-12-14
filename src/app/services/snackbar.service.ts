import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UNKNOWN_ERROR } from '@constants/snackbar-messages.constants';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openSuccess(message?: string): void {
    if (!message) message = UNKNOWN_ERROR;
    this.snackbar.open(message, '', { duration: 2500 });
  }

  openError(message?: string): void {
    if (!message) message = UNKNOWN_ERROR;
    this.snackbar.open(message, '', { duration: 2500 });
  }
}
