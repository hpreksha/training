import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent.component';
@Component({
  selector: 'app-child',
  imports:[],
  template:`<h2>Child Component1</h2>
<p>{{msgFromParent}}</p>`,
  standalone: true
})
export class ChildComponent {

  @Input() msgFromParent:string|undefined;
  msg = 'ViewChild example, from child component.';
}
