import { Component, OnInit, Input } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',

})
export class BatchesComponent implements OnInit {
  public mycolor="blue";
  batches=[];
 
  constructor(private _ser:StringService) { 
    
  

  }

  ngOnInit(): void {
    this._ser.getbatchDetails()
    .subscribe(data=>{this.batches=data})
  }

}
