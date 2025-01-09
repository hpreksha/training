import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
})
export class Comp2Component {
  @Input() msgFromParent: string | undefined;
  constructor() {
    console.log("Constructor called.")
  }
  ngOnInit() {
    console.log("ngOnInit called.")
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called.", changes);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called.');
  }
  ngDoCheck() {
    console.log("ngDoCheck called.")
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
