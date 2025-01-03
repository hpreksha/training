import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from "./home/home.component";
import { Location } from '@angular/common';
import { CompEgComponent } from './comp-eg/comp-eg.component';
import { ParentComponent } from '../app/compRel/parent/parent.component';
import { ChildComponent } from '../app/compRel/parent/child/child.component';
import { Child2Component } from '../app/compRel/parent/child2/child2.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompEgComponent, BindingComponent, DirectiveComponent, HomeComponent, ParentComponent, ChildComponent, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-topics';
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
