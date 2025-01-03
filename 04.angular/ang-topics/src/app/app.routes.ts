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
import { PipeComponent } from './pipe/pipe.component';
import { ParentComponent } from './compRel/parent/parent.component';
import { ChildComponent } from '../app/compRel/parent/child/child.component';
import { Child2Component } from '../app/compRel/parent/child2/child2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    {title:'Pipe Example', path: 'pipe', component: PipeComponent, pathMatch: 'full'},
    {path: 'httpclient', component: HttpclientComponent, pathMatch: 'full'},
    {path: 'rform', component: ReactiveFormsComponent, pathMatch: 'full'},
    {path: 'form', component: FormsComponent, pathMatch: 'full'},
    {path: 'service', component: ServiceEgComponent, pathMatch: 'full'},
    {path: 'signal', component: SignalComponent, pathMatch: 'full'},
    {path: 'directive', component: DirectiveComponent, pathMatch: 'full'},
    {path: 'binding', component: BindingComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {
        path: 'parent-component',
        // component: HttpclientComponent,
        // pathMatch: 'full',
        children: [
            { path: ':id', component: PipeComponent,
                children: [
                    {path: 'user', component: FormsComponent}
                ]
             },
            { path: ':id/user', component: HttpclientComponent }, // if same path is used this will be given priority.
        ]
    },
    {path: 'parentc', component: ParentComponent, pathMatch: 'full'},
    {path: 'child', component: ChildComponent, pathMatch: 'full'},
    {path: 'child2', component: Child2Component, pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
    // {path:'**', component: HomeComponent}
];
