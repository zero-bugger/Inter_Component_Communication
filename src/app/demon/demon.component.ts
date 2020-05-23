import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demon',
  templateUrl: './demon.component.html',
 
})
export class DemonComponent implements OnInit {
  // addition:number;
  // substraction:number;
  count:Number;
  input:String="ANGULAR Classes";
  constructor(private obj:StringService) { }
  
  ngOnInit(): void {
      this.count=this.obj.countCapital(this.input);
      
  }

}
