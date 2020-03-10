import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { ChildComponent } from './child/child.component';
import { WrongcomponentComponent } from './wrongcomponent/wrongcomponent.component';


const routes: Routes = [
{ path:"", component: BatchesComponent},
{ path:"batches", component: BatchesComponent},
{ path:"books", component: ChildComponent},
{ path:"**", component: BatchesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
