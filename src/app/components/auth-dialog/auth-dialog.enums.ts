enum DialogInputPlaceholder {
  LOGIN = 'Логин',
  PASSWORD = 'Пароль',
  PASSWORD_REPEAT = 'Повторите пароль',
  SUBMIT_SIGNIN = 'Войти',
  SUBMIT_SIGNUP = 'Зарегистрироваться',
}

enum AuthFormControlName {
  LOGIN = 'login',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}

enum AuthSnackbarMessage {
  SUCCESS_SIGNIN = 'Успешный вход!',
  SUCCESS_SIGNUP = 'Успешная регистрация!',
}

export { DialogInputPlaceholder, AuthFormControlName, AuthSnackbarMessage };
