// File Content: Component Lifecycle Methods
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp-eg',
  templateUrl: './comp-eg.component.html',
})
export class CompEgComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() message: string | undefined; // Define an @Input property
  @Input() name: string | undefined;
  value = 0;
  setValue()  {
    this.value = 10;
    console.log(`Value has been set to: ${this.value}`);
  }
  setMessage() {
    this.message = "Hello World";
    console.log(`Message has been set to: ${this.message}`);
  }
  setName() {
    this.name = "preksha";
    console.log(`Name has been set to: ${this.name}`);
  }
  constructor() {
    console.log('CompEgComponent Constructor called');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('CompEgComponent ngOnChanges called', changes);
  }

  ngOnInit() {
    console.log('CompEgComponent ngOnInit called');
  }

  ngDoCheck() {
    console.log('CompEgComponent ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('CompEgComponent ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('CompEgComponent ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('CompEgComponent ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('CompEgComponent ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('CompEgComponent ngOnDestroy called');
  }
  afterRender() {
    console.log('CompEgComponent afterRender called');
  }
}