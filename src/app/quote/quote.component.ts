import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  togglePublisher(index: string | number){
    this.quotes[index].showName=!this.quotes[index].showName;
  }

  quotes:Quote[]=[
    new Quote (1,'MKL','Doug Conant','To win the marketplace you must first win the workplace',new Date(2020,3,12)),
    new Quote (2,'Max','Richard Branson','Business opportunities are like buses there`s always another one coming',new Date(2019,7,9)),
    new Quote (3,'Lina','Mae West','You only live once but if you do it right,once is enough',new Date(2020,2,10)),
    new Quote (4,'Elijah','Stephen King','Get busy living or get busy dying',new Date(2020,9,17))
  ]
  

  deleteQuote(isComplete, index) {
    if(isComplete) {
      let toDelete=confirm('Are you sure you want to delete ${this.quotes[index].quote}?')

      if(toDelete) {
        this.quotes.splice(index,1)
      }
    } 
  }
  // upvote(i); {;
  //   this.quotes[i].upvotes ++;
  // }
  // downvote(i); {
  //   this.quotes[i].downvotes  ++;
  // }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
