import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { BookShoppingListService } from './book-list/bookshopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectService } from './projects/project.service';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    BookListComponent,
    BookEditComponent,
    DropdownDirective,
    ProjectStartComponent,
    ProjectEditComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookShoppingListService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule 
{ }
