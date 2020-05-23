import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BatchesComponent } from './batches/batches.component';
import { WrongcomponentComponent } from './wrongcomponent/wrongcomponent.component';
import { DemonComponent } from './demon/demon.component';
import { ArithmeticService } from './arithmetic.service';
import { StringService } from './string.service';
import { Child2Component } from './child2/child2.component';
import { NumberService } from './number.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BatchesComponent,
    WrongcomponentComponent,
    DemonComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
