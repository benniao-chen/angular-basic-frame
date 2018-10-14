import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './login.route';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ShareModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
