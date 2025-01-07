// File Content: Reactive forms
import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.minLength(4)]),
  });
  loginUser() {
    this.onclick();
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onclick() {
    alert("Form Submitted");
  }
}
