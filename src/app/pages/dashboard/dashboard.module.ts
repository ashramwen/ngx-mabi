import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppTranslationModule } from '../../app.translation.module';
import { CommerceResolve } from './../shared/resolves/commerce-resolve';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatchCityPipe } from './match-city.pipe';
import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { TabsModule } from 'ngx-tabs';
import { routing } from './dashboard.routing';

// Must export the config
const firebaseConfig = {
  apiKey: 'AIzaSyAFtTgFoTX2pJ1dADgjSuXTMRnhGs5xV3Q',
  authDomain: 'firebase-mabi.firebaseapp.com',
  databaseURL: 'https://mabi.firebaseio.com',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
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
    CommerceResolve
  ]
})
export class DashboardModule { }
