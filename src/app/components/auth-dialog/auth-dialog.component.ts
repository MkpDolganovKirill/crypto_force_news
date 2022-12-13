import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { SnackbarService } from '@services/snackbar.service';
import { AuthDialogData } from './auth-dialog.interface';
import { DialogInputPlaceholder } from './auth-dialog.enums';
import { AuthPageName } from '@enums/authPage.enums';
import { PageName } from '@enums/pageName.enums';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent implements OnInit {
  public authPageName = AuthPageName;
  public dialogInputPlaceholder = DialogInputPlaceholder;

  get headerText(): PageName {
    return this.data.type === AuthPageName.SIGN_IN
      ? PageName.SIGN_IN
      : PageName.SIGN_UP;
  }

  get submitButtonText(): DialogInputPlaceholder {
    return this.headerText === PageName.SIGN_IN
      ? DialogInputPlaceholder.SUBMIT_SIGNIN
      : DialogInputPlaceholder.SUBMIT_SIGNUP;
  }

  constructor(
    private auth: AuthService,
    private snackbar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: AuthDialogData
  ) {}

  ngOnInit(): void {
    if (this.data.type === AuthPageName.SIGN_IN)
      this.authFormGroup.removeControl('passwordRepeat');
  }

  private checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordRepeat = group.get('passwordRepeat')?.value;
    if (password !== passwordRepeat) {
      group.get('passwordRepeat')?.setErrors({ notMatch: true });
    }
    return null;
  }

  public authFormGroup: FormGroup = new FormGroup(
    {
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordRepeat: new FormControl('', [Validators.required]),
    },
    { validators: this.checkPasswords }
  );

  submit(): void {
    const authFormValue = this.authFormGroup.value;
    if (this.data.type === AuthPageName.SIGN_IN) {
      this.auth
        .signIn(authFormValue)
        .pipe(
          catchError((err) => {
            const errMsg = !err.status
              ? 'DB connection error!'
              : err.error.message;
            this.snackbar.openError(errMsg);
            return of(null);
          })
        )
        .subscribe((resp) => {
          if (!resp) return;
          localStorage.setItem('accessToken', resp.accesstoken);
          localStorage.setItem('refreshToken', resp.refreshtoken);
          localStorage.setItem('userName', resp.username);
          this.auth.isUserAuthenticated.next(true);
          this.snackbar.openSuccess('Успешный вход!');
        });
      return;
    }
    const { login, password } = authFormValue;
    this.auth
      .signUp({ login, password })
      .pipe(
        catchError((err) => {
          const errMsg = !err.status
            ? 'DB connection error!'
            : err.error.message;
          this.snackbar.openError(errMsg);
          return of(null);
        })
      )
      .subscribe((resp) => {
        if (!resp) return;
        localStorage.setItem('accessToken', resp.accesstoken);
        localStorage.setItem('refreshToken', resp.refreshtoken);
        localStorage.setItem('userName', resp.username);
        this.auth.isUserAuthenticated.next(true);
        this.snackbar.openSuccess('Успешная регистрация!');
      });
  }
}
