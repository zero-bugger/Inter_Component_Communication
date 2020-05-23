import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  
  constructor() { }
  isPrime(n:number):boolean{
        
    for(let i=2 ;i<=n/2;i++){
      if(n%i==0){
          return false
      }
    }
    return true;
  }
}
