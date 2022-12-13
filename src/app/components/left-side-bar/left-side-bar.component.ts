import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { AuthDialogComponent } from '@components/auth-dialog/auth-dialog.component';
import { ResourceService } from '@services/resource.service';
import { StoreService } from '@services/store.service';
import { ApiService } from '@services/api.service';
import { AuthService } from '@services/auth.service';
import { AuthPageName } from '@enums/authPage.enums';
import { PageName } from '@enums/pageName.enums';

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
    private api: ApiService,
    private dialog: MatDialog,
    private auth: AuthService,
    public resource: ResourceService
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
      this.cryptoList = resp;
      this.cryptoList = this.cryptoList.slice(0, 10);
    });
  }

  openAuthDialog(type: AuthPageName): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, { data: { type } });
  }
}
