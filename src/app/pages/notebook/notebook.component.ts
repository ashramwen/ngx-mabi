import { Component } from '@angular/core';
import { T200 } from './t200.const';

@Component({
  selector: 'notebook',
  templateUrl: './notebook.html',
  styleUrls: ['./notebook.scss']
})
export class Notebook {

  public text = T200;

  constructor() {
  }
}
