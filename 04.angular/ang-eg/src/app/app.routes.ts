import { Routes } from '@angular/router';
import { CompEgComponent } from './comp-eg/comp-eg.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {path: '', component: AppComponent, pathMatch: 'full'},
    {path: 'about/:id', component: AboutComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'}
];
