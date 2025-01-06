import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent.component';
@Component({
  selector: 'app-child',
  imports: [ParentComponent],
  templateUrl: "./child.component.html",
  standalone: true,
})
export class ChildComponent {
  @Input() msgFromParent: string | undefined;
  msg = 'ViewChild example, from child component.';
}
