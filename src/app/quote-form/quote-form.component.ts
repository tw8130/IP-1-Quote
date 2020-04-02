import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newWords=new Quote(0,"","","");


  @Output()emitQuote=new EventEmitter<Quote>();
  submitQuote() {
    this.emitQuote.emit(this.newWords);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
