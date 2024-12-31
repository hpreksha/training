import { Routes } from '@angular/router';
import { CompEgComponent } from './comp-eg/comp-eg.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    // {path: '', component: AppComponent, pathMatch: 'full'},
    {path: 'about', component: AboutComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'admin', component: AdminComponent, pathMatch: 'full'}
];
