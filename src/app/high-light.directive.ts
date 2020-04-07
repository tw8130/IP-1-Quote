import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor( private elem:ElementRef) {
    elem.nativeElement.style.backgroud ="green"
   }
}
