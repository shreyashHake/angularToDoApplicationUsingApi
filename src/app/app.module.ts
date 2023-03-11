import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedCompComponent } from './todo/completed-comp/completed-comp.component';
import { NotCompletedCompComponent } from './todo/not-completed-comp/not-completed-comp.component';
import { TodosModule } from './todo/todos.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedCompComponent,
    NotCompletedCompComponent,

  ],
  imports: [
    BrowserModule,
    TodosModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
