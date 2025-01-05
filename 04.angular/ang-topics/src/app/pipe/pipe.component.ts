import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { CstmPipePipe } from '../cstm-pipe.pipe';
@Component({
  selector: 'app-pipe',
  imports: [CommonModule, CstmPipePipe],
  templateUrl: './pipe.component.html',
})
export class PipeComponent {
  birthday: Date = new Date(2025, 0, 1);
  amount: number = 12345.111111;
  title: string = 'Hello world';
}
