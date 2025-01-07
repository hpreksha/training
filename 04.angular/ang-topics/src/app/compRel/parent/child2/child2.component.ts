// File Content: Child to parent message

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
})
export class Child2Component {
  @Output() newMessage = new EventEmitter<string>();
  
  sendMessageToParent(message: string) {
    // const message = 'Message from Child To Parent Component.';
    this.newMessage.emit(`Message from child2 component: ${message}`);
  }
}
