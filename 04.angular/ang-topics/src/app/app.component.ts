import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from "./home/home.component";
import { Location } from '@angular/common';
import { CompEgComponent } from './comp-eg/comp-eg.component';
import {Comp1Component} from './comp1/comp1.component';
@Component({
  selector: 'app-root',
  imports: [Comp1Component,RouterOutlet, CompEgComponent, BindingComponent, DirectiveComponent, HomeComponent, Comp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-topics';
  parentMessage = 'Hello from Parent Component!';
  parentMessage1 : string|undefined;
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  addItem(msg: string) {
    this.parentMessage1 = msg;
  }
}
