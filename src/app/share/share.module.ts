import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { MultiLanguageComponent } from './components/multi-language/multi-language.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutoFocusDirective,
    MultiLanguageComponent,
  ],
  exports: [
    AutoFocusDirective,
    FormsModule,
    ReactiveFormsModule,
    MultiLanguageComponent,
  ]
})
export class ShareModule { }
