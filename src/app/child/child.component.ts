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
  books:string[];
  public str="";

  constructor() { 
    this.books=["Angulario",'Android For Dummies','Artificial ','Node JS in action','Big Data for Dummies']

  }

  ngOnInit(): void {
  }

  public fun(value){
    this.str=value;
    this.Event.emit(this.str);
  }

}
