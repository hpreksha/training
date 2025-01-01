import { Component } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userLogin(item:any) {
    console.log(item);
  }
}
