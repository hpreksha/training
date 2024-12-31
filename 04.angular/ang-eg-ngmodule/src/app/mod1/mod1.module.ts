import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Mod2Module } from '../mod2/mod2.module';
import {TempComponent} from '../temp/temp.component';

@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    Mod2Module
  ],
  exports: [
    Comp1Component,
    Comp2Component
  ]
})
export class Mod1Module { }
