// File Content: Template driven forms
import { Component } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-forms',
  imports: [FormsModule, NgIf],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  userLogin(item:any) {
    console.log(item);
  }
}
