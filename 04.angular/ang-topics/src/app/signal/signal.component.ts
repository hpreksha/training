import { Component, signal, computed, effect, untracked } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
})
export class SignalComponent {
  title = 'signal-eg';
  count = signal(0);
  // Method to increment the count
  inc() {
    this.count.set(this.count() + 1);
  }

  // Computed value for double the count
  doubleCount = computed(() => {this.count() * 2
  });
  constructor() {
    effect(() => {
      // console.log(`The current count is: ${this.count()}`);
      untracked(() => {
        console.log(`The current color is: ${this.count()}`);
      });
    });
  }
}