import { Component, input } from '@angular/core';
// import { DirectiveComponent } from './directive.component';
import { RedElDirective } from '../red-el.directive';
import { NgIf, NgFor, CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive',
  imports: [RedElDirective, NgIf, NgFor, CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  // value1 = input(0);
  // value1 = input.required<number>();
  //main.ts:5  ERROR RuntimeError: NG0950: Input is required but no value is available yet.
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
