import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgaModule } from '../theme/nga.module';
import { Pages } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    SharedModule,
    routing
  ],
  declarations: [Pages]
})
export class PagesModule {
}
