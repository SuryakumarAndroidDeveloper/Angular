import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform(value: number, ...args: string[]): any {
  //const msg = (value > 10) ? 'It is a small Number' : value;
    //return msg;
    if (value>10 && value<19){
      return "Small"
    }
    if (value>20 && value<29){
      return "Medium"
    }
    if (value>30 && value<39){
      return "Large"
    }
    if (value>40 && value<49){
      return "Excel"
    }
    if (value>50 && value<59){
      return "DoubleXL"
    }
    if (value>60 && value<120){
      return "XL Plus"
    }
    if(value>120){
      return "please enter a proper number"
    }
  }

}
