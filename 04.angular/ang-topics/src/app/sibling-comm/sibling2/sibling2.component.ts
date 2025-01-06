import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiblingServiceService } from '../sibling-service.service';
@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.css'
})
export class Sibling2Component implements OnInit{
  rcdMsg: string = '';
  constructor(private siblingService: SiblingServiceService) {}
  // ngOnInit() {
  //   console.log("initated");
  //   this.rcdMsg = this.siblingService.getmsg();
  // } //will not work if msg is sent after few seconds and the component is initated before it, then no msg will be passed.
  ngOnInit() {
    this.siblingService.getmsg().subscribe(msg=> {
      this.rcdMsg = msg;
    })
    
  }
  ngDoCheck() {
    console.log("Do check intiasted")
  }
}
