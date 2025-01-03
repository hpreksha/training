import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent.component';
@Component({
  selector: 'app-child',
  imports:[],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  standalone: true
})
export class ChildComponent {

  @Input() msgFromParent:string|undefined;
  
}
