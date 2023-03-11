import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedCompComponent } from './completed-comp/completed-comp.component';
import { NotCompletedCompComponent } from './not-completed-comp/not-completed-comp.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'completed', component: CompletedCompComponent},
  {path: 'notCompleted', component: NotCompletedCompComponent},
  {path: 'details/:id', component: TodoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
