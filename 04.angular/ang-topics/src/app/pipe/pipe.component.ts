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
  birthday: Date = new Date(2025, 0, 1);
  amount: number = 12345.111111;
  title: string = 'hello world';
}
