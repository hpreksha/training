import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CompEgComponent } from './comp-eg/comp-eg.component'; // Importing the component
import {HomeComponent} from './components/home/home.component'; // Importing the component
import {AboutComponent} from './components/about/about.component'; // Importing the component
import { ClassEg } from './class-eg';
import {HeaderComponent} from './header/header.component'; // Importing the component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent], // Importing the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-eg';
  @ViewChild(HomeComponent) homeComponent!: HomeComponent;
  // q : string|undefined;
  ngOnInit() {
    const person = new ClassEg('Alice', 30);
    console.log(person.describe()); // Output: Alice is 30 years old.
    this.changeTitle();//constructor->oninit
    // this.q = this.homeComponent.q;
  }
  changeTitle() {
    this.title = 'Angular Example';
  }
}
