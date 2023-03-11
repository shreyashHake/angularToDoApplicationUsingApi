import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedCompComponent } from './completed-comp/completed-comp.component';
import { NotCompletedCompComponent } from './not-completed-comp/not-completed-comp.component';

const routes: Routes = [
  {path: 'completed', component: CompletedCompComponent},
  {path: 'notCompleted', component: NotCompletedCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
