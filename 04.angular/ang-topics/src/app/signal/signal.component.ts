// File Content: Signal example
import { Component, signal, computed, effect, untracked } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
})
export class SignalComponent {

  title = 'signal-eg';
  count = signal(0);
  obj_eg = {id:1, name:"preksha"};
  obj_eg_signal = signal(this.obj_eg);
  inc() {
    this.count.set(this.count() + 1);
  }

  doubleCount = computed(() => {this.count() * 2;
  });

  changeId(x:any) {
    this.obj_eg["id"] = x;
  }

  constructor() {
    effect(()=> {
      console.log('count changed', this.count());
      // console.log('count changed', untracked(() => this.count()));
    })
  }
}