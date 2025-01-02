import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  @Input() childMessage: string|undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  sendMessage() {
    this.newItemEvent.emit('Hello from Comp1Component');
  }
  
}
