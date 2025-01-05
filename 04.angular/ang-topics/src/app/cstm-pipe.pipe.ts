import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cstmPipe'
})
export class CstmPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value!.toLowerCase().replace(/ /g, '-');
  }

}
