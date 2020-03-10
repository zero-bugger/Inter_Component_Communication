import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BatchesComponent } from './batches/batches.component';
import { WrongcomponentComponent } from './wrongcomponent/wrongcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BatchesComponent,
    WrongcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
