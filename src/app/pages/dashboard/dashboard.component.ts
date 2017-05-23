import { City, Commerce, Conveyance, Good } from './../../shared/model';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ranks } from './ranks.const';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  public ranks = ranks;
  public citys: City[];
  public conveyance: Conveyance[];
  public goods: Good[];
  public trades: Conveyance[];
  public partner: boolean = true;
  public alpaca: boolean = true;
  public myRank: number = 15;
  public cityIndex: number = 0;

  private commerce: Commerce;

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.commerce = this.route.snapshot.data['commerce'];
    this.citys = this.commerce.citys;
    this.conveyance = this.commerce.conveyance;
    this.goods = this.commerce.goods;

    this.goods.forEach((g) => g.price = 1);
    this.switchConveyance();
  }

  public tabSelect(index: number) {
    this.cityIndex = index;
    this.calByCity();
  }

  public switchConveyance() {
    this.trades = this.conveyance.map((c) => ({ ...c }));
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

  public calByCity(value?: string) {
    if (value !== undefined)
      this.myRank = parseInt(value, 0);
    // setCookie('commerceRank', this.myRank, 30);
    this.goods.forEach((good) => {
      this.cal(good);
    });
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
