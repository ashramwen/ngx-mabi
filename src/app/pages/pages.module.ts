import { AlpacaComponent } from './alpaca/alpaca.component';
import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { NgaModule } from '../theme/nga.module';
import { Pages } from './pages.component';
import { routing }       from './pages.routing';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages, AlpacaComponent]
})
export class PagesModule {
}
