import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  title = 'signal-eg';
  count = signal(0);
  // Method to increment the count
  inc() {
    this.count.set(this.count() + 1);
  }

  // Computed value for double the count
  doubleCount = computed(() => this.count() * 2);
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
}