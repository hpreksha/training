import { Component } from '@angular/core';
import {TempComponent} from './temp/temp.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-eg-ngmodule';
}
