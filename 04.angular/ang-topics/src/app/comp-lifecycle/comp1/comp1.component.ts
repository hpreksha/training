import { Component, Input, SimpleChanges } from '@angular/core';
import { Comp2Component } from './comp2/comp2.component';
@Component({
  selector: 'app-comp1',
  imports: [Comp2Component],
  templateUrl: './comp1.component.html',
})
export class Comp1Component {
  msgToChild: string = '';
  setMessage(value:string) {
    this.msgToChild = value;
  }
  // ------------------------------------------
  
}
