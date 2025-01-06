import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: false,

  template: `<p>comp1 works!</p>
    <p>{{ q }}</p>
    <app-comp2></app-comp2>
    <app-comp3></app-comp3>`,
})
export class Comp1Component {
  q = 'qq';
}
