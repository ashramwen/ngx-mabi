import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ranks } from './ranks.const';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  public ranks = ranks;
  public citys;
  public conveyance;
  public goods;
  public trades;
  public partner = true;
  public alpaca = true;
  public myRank = 15;
  public cityIndex = 0;

  constructor(
    af: AngularFire
  ) {
    af.database.list('').subscribe((res) => {
      this.citys = [...res[0]];
      this.conveyance = [...res[1]];
      this.goods = [...res[2]];
      // this.trades = this.conveyance.map((c) => c);
      this.goods.forEach((g) => g.price = 1);
      this.switchConveyance();
    });
  }

  public test() {
    console.log('test');
  }
  public tabSelect(index) {
    this.cityIndex = index;
    this.calByCity();
  }

  public switchConveyance() {
    this.trades = this.conveyance.map((c) => Object.assign({}, c));
    if (this.partner && this.alpaca) {
      this.trades.forEach((o) => {
        o.space += 1;
        o.capacity += 100;
      });
      this.trades[2].space += 1;
      this.trades[2].capacity += 100;
    } else if (this.partner) {
      this.trades.forEach((o) => {
        o.space += 1;
        o.capacity += 100;
      });
    } else if (this.alpaca) {
      this.trades[2].space += 2;
      this.trades[2].capacity += 200;
    }
    this.calByCity();
  };

  public calByCity() {
    // setCookie('commerceRank', this.myRank, 30);
    this.goods.forEach((good) => {
      this.cal(good);
    });
  }

  public sheep() {
    // var thissound = angular.element('#audio1')[0];
    // thissound.play();
  }

  private cal(good) {
    if (!good.gain) good.gain = new Array();
    this.trades.forEach((car, index) => {
      good.gain[index] = this.earn(good, car);
    });
  }

  private earn(good, car) {
    let ducat;
    if (car.space * good.size * good.weight > car.capacity)
      ducat = Math.floor(car.capacity / good.size);
    else
      ducat = car.space * good.weight;
    return ducat * (good.price || 1) * (100 + this.myRank) / 100;
  }
}
