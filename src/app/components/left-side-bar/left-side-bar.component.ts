import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '@components/auth-dialog/auth-dialog.component';
import { AuthPageName } from '@enums/authPage.enums';
import { PageName } from '@enums/pageName.enums';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { AuthService } from '@services/auth.service';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  public pageName = PageName;
  public cryptoList: CryptoItem[] = [];
  public authPageName = AuthPageName;
  public isUserAuthenticated = false;
  public userName = localStorage.getItem('userName') || 'username';

  constructor(
    private store: StoreService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.isUserAuthenticated.subscribe((resp) => {
      this.isUserAuthenticated = resp;
      this.userName = localStorage.getItem('userName') || 'Пользователь';
    });
    if (this.auth.isAuthenticated()) {
      this.auth.isUserAuthenticated.next(true);
    }
    this.store.cryptoList$.subscribe((resp) => {
      if (!resp) return;
      this.cryptoList = resp.slice(0, 10);
    });
  }

  openAuthDialog(type: AuthPageName): void {
    this.dialog.open(AuthDialogComponent, { data: { type } });
  }
}
