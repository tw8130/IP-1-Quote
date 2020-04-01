import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote (1,'MKL','Doug Conant','To win the marketplace you must first win the workplace'),
    new Quote (2,'Max','Richard Branson','Business opportunities are like buses there`s always another one coming'),
    new Quote (3,'Lina','Mae West','You only live once but if you do it right,once is enough'),
    new Quote (4,'Elijah','Stephen King','Get busy living or get busy dying')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
