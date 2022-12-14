import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DB_CONNECTION_ERROR } from '@constants/snackbar-messages.constants';
import { AuthPageName, LocalStorageValue } from '@enums/authPage.enums';
import { PageName } from '@enums/pageName.enums';
import { AuthService } from '@services/auth.service';
import { SnackbarService } from '@services/snackbar.service';
import { catchError, of } from 'rxjs';

import {
  AuthFormControlName,
  AuthSnackbarMessage,
  DialogInputPlaceholder,
} from './auth-dialog.enums';
import { AuthDialogData } from './auth-dialog.interface';

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
      this.authFormGroup.removeControl(AuthFormControlName.PASSWORD_REPEAT);
  }

  private checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get(AuthFormControlName.PASSWORD)?.value;
    const passwordRepeat = group.get(
      AuthFormControlName.PASSWORD_REPEAT
    )?.value;
    if (password !== passwordRepeat) {
      group
        .get(AuthFormControlName.PASSWORD_REPEAT)
        ?.setErrors({ notMatch: true });
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
              ? DB_CONNECTION_ERROR
              : err.error.message;
            this.snackbar.openError(errMsg);
            return of(null);
          })
        )
        .subscribe((resp) => {
          if (!resp) return;
          localStorage.setItem(LocalStorageValue.ACCESSTOKEN, resp.accesstoken);
          localStorage.setItem(
            LocalStorageValue.REFRESHTOKEN,
            resp.refreshtoken
          );
          localStorage.setItem(LocalStorageValue.USERNAME, resp.username);
          this.auth.isUserAuthenticated.next(true);
          this.snackbar.openSuccess(AuthSnackbarMessage.SUCCESS_SIGNIN);
        });
      return;
    }
    const { login, password } = authFormValue;
    this.auth
      .signUp({ login, password })
      .pipe(
        catchError((err) => {
          const errMsg = !err.status ? DB_CONNECTION_ERROR : err.error.message;
          this.snackbar.openError(errMsg);
          return of(null);
        })
      )
      .subscribe((resp) => {
        if (!resp) return;
        localStorage.setItem(LocalStorageValue.ACCESSTOKEN, resp.accesstoken);
        localStorage.setItem(LocalStorageValue.REFRESHTOKEN, resp.refreshtoken);
        localStorage.setItem(LocalStorageValue.USERNAME, resp.username);
        this.auth.isUserAuthenticated.next(true);
        this.snackbar.openSuccess(AuthSnackbarMessage.SUCCESS_SIGNUP);
      });
  }
}
