import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.route';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
