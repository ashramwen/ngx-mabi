import { T200, ThreeHundredWords } from './music.const';

import { Component } from '@angular/core';

@Component({
  selector: 'notebook',
  templateUrl: './notebook.html',
  styleUrls: ['./notebook.scss']
})
export class Notebook {

  public T200 = T200;

  public ThreeHundredWords = ThreeHundredWords;

  constructor() {
  }
}
