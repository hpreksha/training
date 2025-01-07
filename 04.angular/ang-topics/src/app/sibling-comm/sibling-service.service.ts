// File Content: Sibling communication using event emitter
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingServiceService {
  // private msg:string = '';
  msgEmitter = new EventEmitter<string>();
  getmsg() {
    console.log(this.msgEmitter);
    return this.msgEmitter;
  }
  setmsg(msg:string) {
    this.msgEmitter.emit(msg);
    console.log(this.msgEmitter);
    
  }
}
