import { Component } from '@angular/core';
import { SiblingServiceService } from '../sibling-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sibling1',
  imports: [FormsModule],
  templateUrl: './sibling1.component.html',
})
export class Sibling1Component {
  msg: string='';
  msg1:string='';
  constructor(private siblingService: SiblingServiceService) {}
  sendMsg() {
    console.log("Sending..");
    setTimeout(() => {
    this.siblingService.setmsg(this.msg);
    this.msg1 = "Message sent to sibling2.";
    }, 5000);
  }
}
