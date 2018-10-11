import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { CxAgentTableComponent } from './components/cx-agent-table/cx-agent-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AutoFocusDirective,
    CxAgentTableComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoFocusDirective,
    CxAgentTableComponent,
  ]
})
export class ShareModule { }
