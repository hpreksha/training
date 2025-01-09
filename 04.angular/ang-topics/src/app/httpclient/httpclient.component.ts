// File Content:Get, post method to api.
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-httpclient',
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './httpclient.component.html',
  styleUrls: ['./styles.css','./styles2.css']
})
export class HttpclientComponent {
  // http = inject(HttpClient);
  userList: any [] = [];
  userForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }
  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => {
      this.userList = data;
    });
    console.log('User List:', this.userList);
    // subscribe: to capture data
  }
  addUser() {
    const newUser = this.userForm.value;
    this.http.post('https://jsonplaceholder.typicode.com/users', newUser).subscribe((data: any) => {
      console.log('User added:', data);
      this.userList.push(data); // Optionally add the new user to the list
      this.getAllUser(); // Refresh the user list
    });
  }
}
