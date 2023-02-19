import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  visitorcount:number=0;

  incrementvisitorcount(){
    this.visitorcount=this.visitorcount+1;

    console.log("visitor count for today"+this.visitorcount)
  }
}
