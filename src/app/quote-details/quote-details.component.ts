import { Component, OnInit,Input } from '@angular/core';
import {Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote:Quote;
  upvotes=0;
  downvotes=0;

  constructor() { }

  ngOnInit(): void {
  }

}
