import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',

})
export class ChildComponent implements OnInit {
 
  @Output() public Event=new EventEmitter();
  @Input() public mydata="";
  public mycolor="red"
  public str="";
  constructor() { }

  ngOnInit(): void {
  }

  public fun(value){
    this.str=value;
    this.Event.emit(this.str);
  }

}
