import { Component, OnInit } from '@angular/core';
import { ResourceService } from '@services/resource.service';
import { StoreService } from '@services/store.service';
import { CryptoItem } from '@pages/crypto-rates/interfaces';
import { PageName } from '@enums/pageName.enums';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  public pageName = PageName;
  public cryptoList: CryptoItem[] = [];

  constructor(private store: StoreService, public resource: ResourceService) {}

  ngOnInit(): void {
    this.store.cryptoList$.subscribe((resp) => {
      if (!resp) return;
      this.cryptoList = resp;
      this.cryptoList = this.cryptoList.slice(0, 10);
    });
  }
}
