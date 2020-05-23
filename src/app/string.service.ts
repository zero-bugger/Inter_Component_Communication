import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBatches } from './IBatches';

@Injectable({
  providedIn: 'root'
})

export class StringService {
  total:number=0;
  private url="/assets/data/list.json"

  constructor(private http:HttpClient) { }

  countCapital(input:String):number{
    for(let i=0;i<input.length;i++){
      if(input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90){
           this.total=this.total+1;
      }
    }
      
    return this.total;

  }  

  getbatchDetails():Observable<IBatches[]>{
    return this.http.get<IBatches[]>(this.url);
  }


}
