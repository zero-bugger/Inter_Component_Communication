import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input() public parentData;
  public str="";
  @Output() public emitter=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public fun(value){
    this.str="Hello from child"
    this.emitter.emit(this.str);
  }

}
