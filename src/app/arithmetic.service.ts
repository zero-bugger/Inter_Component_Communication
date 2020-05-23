import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  

  constructor() { }

  add(x:number,y:number):number{
    return x+y;
  }
  sub(x:number,y:number):number{
    return x-y;
   }
}
