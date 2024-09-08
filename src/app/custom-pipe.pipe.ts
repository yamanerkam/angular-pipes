import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
// num2?:number => optional
  transform(value: string, num1:number,num2:number): string {
   const newValue = value.slice(num1,num2)
    return newValue;
  }

}
