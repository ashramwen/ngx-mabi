import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.scss']
})
export class AlpacaComponent implements OnInit {

  @ViewChild('audio')
  public audio: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  baa() {
    (this.audio.nativeElement as HTMLAudioElement).play();
  }
}
