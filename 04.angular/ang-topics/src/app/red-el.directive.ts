import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'red';
    const div2 = el.nativeElement;
    const div1 = document.querySelector('div1') as HTMLElement;
    if (div1) {
      div1.style.color = 'red';
    }
  }
}