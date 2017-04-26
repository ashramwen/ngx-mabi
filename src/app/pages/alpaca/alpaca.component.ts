import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.scss']
})
export class AlpacaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  baa() {
    let audio = new Audio();
    audio.src = '/assets/media/sheep.mp3';
    audio.load();
    audio.play();
  }
}
