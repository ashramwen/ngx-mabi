import { AlpacaComponent } from './components/alpaca/alpaca.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CommerceResolve } from './resolves/commerce-resolve';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Must export the config
const firebaseConfig = {
  apiKey: 'AIzaSyAFtTgFoTX2pJ1dADgjSuXTMRnhGs5xV3Q',
  authDomain: 'firebase-mabi.firebaseapp.com',
  databaseURL: 'https://mabi.firebaseio.com',
  storageBucket: '',
  messagingSenderId: ''
};

const SHARED_COMPONENTS = [
  AlpacaComponent
];

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    CommerceResolve
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
