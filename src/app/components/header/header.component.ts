import { Component } from '@angular/core';

import { PageList, RouteList } from './header.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public pages: PageList[] = [
    PageList.NEWS,
    PageList.CRYPTO,
    PageList.CALCULATOR,
    PageList.EDUCATION,
    PageList.ABOUT_US,
  ];
  public routes: RouteList[] = [
    RouteList.NEWS,
    RouteList.RATES,
    RouteList.CALCULATOR,
    RouteList.EDUCATION,
    RouteList.ABOUT_US,
  ];
  public title = PageList.TITLE;
  public activeNumber = 0;
  public isOpenMobileMenu = false;
}
