import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
  public str="";
  // Action listener for button
  public SendEvent(value)
  {
    // Send the event to parent
    this.str=value;
    this.MyEvent.emit(this.str);
  }
  constructor() { }

  ngOnInit() {
  }

}
