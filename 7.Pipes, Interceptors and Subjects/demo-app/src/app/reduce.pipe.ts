import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], callBackFn: (acc: T, curr: T) => T, initialValue: T): T {
    // [1,2,3,4].reduce((acc, curr) => {
    //   return acc + curr
    // }, 0)
    return array.reduce(callBackFn, initialValue);
  }

}
