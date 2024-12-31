import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedElDirective } from './red-el.directive';
import { NgIf, NgFor, CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RedElDirective, NgIf, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directive-eg';
  isVisible = true;
  item = [1, 2, 3, 4];
  items = [
    { name: 'Item 1', visible: true },
    { name: 'Item 2', visible: false },
    { name: 'Item 3', visible: true },
    { name: 'Item 4', visible: true },
  ];
value = 'A';
isActive=false;
toggleActive() {
  this.isActive = !this.isActive;
}
onClick() {
  console.log("q");
}
onMouseOver( ) {
  console.log("qq")
}
}