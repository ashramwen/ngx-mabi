import 'rxjs/add/operator/first';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { Commerce } from './../model/index';
import { Injectable } from '@angular/core';

@Injectable()
export class CommerceResolve implements Resolve<Commerce> {

  constructor(
    private db: AngularFireDatabase
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.db.list('/')
      .first()
      .map(res => {
        return {
          citys: [...res[0]],
          conveyance: [...res[1]],
          goods: [...res[2]]
        } as Commerce;
      });
  }
}

