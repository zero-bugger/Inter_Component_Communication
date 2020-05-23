import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public Message;
  public title="Home"
  public size;



  public length(value){
    this.size=value.length;
  }
   public values = '';

  public onKey(event: any) { 
    this.values = event.target.value.length ;
  }

}
