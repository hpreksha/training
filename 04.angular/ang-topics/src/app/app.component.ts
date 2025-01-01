import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from "./home/home.component";
import { Location } from '@angular/common';
import { CompEgComponent } from './comp-eg/comp-eg.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompEgComponent, BindingComponent, DirectiveComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-topics';
  parentMessage = 'Hello from Parent Component!';
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
