import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompEgComponent } from './comp-eg/comp-eg.component'; // Importing the component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompEgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-eg';
}
