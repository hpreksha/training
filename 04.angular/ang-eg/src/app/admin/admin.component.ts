import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, NgIf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  showError = false;
  model:any={};
  cover!: string;
  cover_file:any;
 onSubmit(form: NgForm) {
  if(form.invalid || !this.cover) {
    console.log("Invalid form!");
    if(!this.cover) {
      this.showError = true;
    }
    form.control.markAllAsTouched();
    return;
  }
  console.log("Form submitted", form.value);
 }
 onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.cover_file = file;
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result!.toString();
      this.cover = dataURL;
      console.log('image', this.cover);
    };
    reader.readAsDataURL(file);
    this.showError = false;
  }
 }
}

