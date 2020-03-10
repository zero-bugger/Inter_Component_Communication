import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // String that we want to send to the child component
  public message1 = "Hello Child Component";
  public message="";
}
