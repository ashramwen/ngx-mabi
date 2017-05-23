import { City, Conveyance, Good } from './index';

export interface Commerce {
  citys: City[];
  conveyance: Conveyance[];
  goods: Good[];
}
