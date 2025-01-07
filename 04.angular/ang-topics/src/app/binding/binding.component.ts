// File Content: Interpolation, Property Binding, Two way binding

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-binding',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './binding.component.html',
})
export class BindingComponent {
  title = 'binding-eg';
  name="John";
  disabled=true;
}
