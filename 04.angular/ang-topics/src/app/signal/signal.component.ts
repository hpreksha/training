// import { Component, computed, signal} from '@angular/core';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-signal',
//   imports: [FormsModule],
//   templateUrl: './signal.component.html',
//   styleUrl: './signal.component.css'
// })
// export class SignalComponent {
//   title="signal-eg"
//   count=signal(0);
//   inc() {
//     this.count.set(this.count()+1);
//   }
//   doubleCount = computed(() => this.count() * 2);
//   // doubleCount1() {
//   // this.doubleCount.set(this.doubleCount()+1);
//   // }
//   // Property 'set' does not exist on type 'Signal<number>'
// }


import { Component, signal, computed } from '@angular/core';

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
}