import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutoFocusDirective
  ],
  exports: [
    AutoFocusDirective,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ShareModule { }
