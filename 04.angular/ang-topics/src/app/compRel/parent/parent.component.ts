import { Component } from '@angular/core';
import { ChildComponent } from '../parent/child/child.component';
import { Child2Component } from '../parent/child2/child2.component';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  standalone: true,
})
export class ParentComponent {
  msgToChild: string = '';
  sendMessage() {
    this.msgToChild = 'Message from Parent To Child Component.';
    alert('Message sent');
  }
  // ------------------------------------------
  msgFromChild: string = '';
  getMessage(value: string) {
    this.msgFromChild = value;
  }
}
