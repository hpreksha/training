import { Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { BindingComponent } from './binding/binding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignalComponent} from './signal/signal.component';
import { ServiceEgComponent} from './service-eg/service-eg.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { Comp1Component } from './comp1/comp1.component';
import { PipeComponent } from './pipe/pipe.component';
export const routes: Routes = [
    {path: 'pipe', component: PipeComponent, pathMatch: 'full'},
    {path: 'comp1', component: Comp1Component, pathMatch: 'full'},
    {path: 'httpclient', component: HttpclientComponent, pathMatch: 'full'},
    {path: 'rform', component: ReactiveFormsComponent, pathMatch: 'full'},
    {path: 'form', component: FormsComponent, pathMatch: 'full'},
    {path: 'service', component: ServiceEgComponent, pathMatch: 'full'},
    {path: 'signal', component: SignalComponent, pathMatch: 'full'},
    {path: 'directive', component: DirectiveComponent, pathMatch: 'full'},
    {path: 'binding', component: BindingComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'}
];
