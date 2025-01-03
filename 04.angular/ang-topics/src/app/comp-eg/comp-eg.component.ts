import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp-eg',
  templateUrl: './comp-eg.component.html',
  styleUrls: ['./comp-eg.component.css']
})
export class CompEgComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() message: string | undefined; // Define an @Input property

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
}