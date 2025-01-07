// File Content: Service used in service-eg.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users() {
    return [
      {name:"John", age:20, email:"john@gmail.com"},
      {name:"Jane", age:25, email:"jane@gmail.com"},
      {name:"Doe", age:30, email:"doe@gmail.com"}
    ]
  }
}
