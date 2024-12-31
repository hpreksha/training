import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompEgComponent } from './comp-eg/comp-eg.component'; // Importing the component
import {HomeComponent} from './components/home/home.component'; // Importing the component
import {AboutComponent} from './components/about/about.component'; // Importing the component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,AboutComponent], // Importing the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-eg';
  ngOnInit() {
    this.changeTitle();//constructor->oninit
  }
  changeTitle() {
    this.title = 'Angular Example';
  }
}
