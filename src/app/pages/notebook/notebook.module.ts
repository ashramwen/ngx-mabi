import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { Notebook } from './notebook.component';
import { routing } from './notebook.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    ClipboardModule
  ],
  declarations: [
    Notebook
  ]
})
export class NotebookModule {
}
