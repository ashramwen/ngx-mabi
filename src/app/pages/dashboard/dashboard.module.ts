import { AppTranslationModule } from '../../app.translation.module';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatchCityPipe } from './match-city.pipe';
import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { TabsModule } from 'ngx-tabs';
import { routing } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    TabsModule
  ],
  declarations: [
    Dashboard,
    MatchCityPipe
  ],
  providers: [
  ]
})
export class DashboardModule { }
