import { Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { BindingComponent } from './binding/binding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignalComponent} from './signal/signal.component';
export const routes: Routes = [
    {path: 'signal', component: SignalComponent, pathMatch: 'full'},
    {path: 'directive', component: DirectiveComponent, pathMatch: 'full'},
    {path: 'binding', component: BindingComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'}
];
