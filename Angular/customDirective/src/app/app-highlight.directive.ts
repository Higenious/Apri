import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
