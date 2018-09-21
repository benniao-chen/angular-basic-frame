import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.route';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HeaderComponent } from './home-index/header/header.component';
import { MenuComponent } from './home-index/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HomeIndexComponent,
    HeaderComponent,
    MenuComponent,
  ]
})
export class HomeModule { }
