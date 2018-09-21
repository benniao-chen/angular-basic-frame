import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.route';
import { LoginIndexComponent } from './login-index/login-index.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LoginIndexComponent]
})
export class LoginModule { }
