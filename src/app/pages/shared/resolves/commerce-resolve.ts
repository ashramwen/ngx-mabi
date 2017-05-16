import 'rxjs/add/operator/first';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { Commerce } from './../model/commerce';
import { Injectable } from '@angular/core';

@Injectable()
export class CommerceResolve implements Resolve<Commerce> {

  constructor(private af: AngularFireDatabase) { }

  resolve(route: ActivatedRouteSnapshot) {
    let data = this.af.list('/');
    return data.map(res => {
      return {
        citys: [...res[0]],
        conveyance: [...res[1]],
        goods: [...res[2]]
      } as Commerce;
    });

    // return new Promise((resolve, reject) => {
    //   data.first()
    //     .map(res => {
    //       return {
    //         citys: [...res[0]],
    //         conveyance: [...res[1]],
    //         goods: [...res[2]]
    //       } as Commerce;
    //     }).subscribe(() => {
    //       resolve(data);
    //     }, reject);
    // });
  }
}

