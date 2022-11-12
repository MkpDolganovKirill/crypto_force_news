import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pages = ['Новости', 'Крипта', 'Калькулятор', 'Обучение', 'О нас'];
  public routes = ['news', 'rates' , 'calculator', 'education', 'about'];
  public activeNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
