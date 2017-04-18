import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchCity'
})
export class MatchCityPipe implements PipeTransform {

  transform(goods: any, cityId): any {
    return goods.filter(g => { return g.city_id === cityId; });
  }

}
