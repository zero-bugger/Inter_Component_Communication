import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  
})
export class Child2Component implements OnInit {
  prime:boolean
  input1:number=23;
  count:Number;
  batches=[];
  input:String="ANGULAR Classes MARVELLOUS";
  constructor(private ser:StringService) { }

  ngOnInit(): void {
    this.ser.getbatchDetails()
    .subscribe(data=>this.batches=data)
  }

}
