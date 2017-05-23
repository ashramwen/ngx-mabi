import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alpaca',
  templateUrl: './alpaca.component.html',
  styleUrls: ['./alpaca.component.scss']
})
export class AlpacaComponent {

  @ViewChild('audio')
  public audio: ElementRef;

  constructor() { }

  baa() {
    (this.audio.nativeElement as HTMLAudioElement).play();
  }
}
