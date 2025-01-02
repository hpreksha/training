import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  birthday: Date = new Date(1990, 1, 1); // February 1, 1990
  amount: number = 12345;
  title: string = 'hello world';

  get format() {
    return 'shortDate';
  }
}
