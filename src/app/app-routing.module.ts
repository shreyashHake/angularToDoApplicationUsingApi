import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'todo', component: TodoComponent},
  {path:'', redirectTo: '/todo', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

// routing helps to navigate from one component to other
