// File Content: Directives
import { Component } from '@angular/core';
// import { DirectiveComponent } from './directive.component';
import { RedElDirective } from '../red-el.directive';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-directive',
  imports: [RedElDirective,CommonModule, NgClass],
  styles: [
    `.special {
      color: red;
    }`
  ],
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {
  title = 'directive-eg';
  text='';
  isVisible = true;
  item = [1, 2, 3, 4];
  items = [
    { name: 'Item 1', visible: true },
    { name: 'Item 2', visible: false },
    { name: 'Item 3', visible: true },
    { name: 'Item 4', visible: true },
  ];
value = "2";
isActive=false;
toggleActive() {
  this.isActive = !this.isActive;
}
onClick() {
  this.text = 'You clicked the button!';
}
onMouseOver( ) {
  this.text = 'You hovered over the button!';
}
}
