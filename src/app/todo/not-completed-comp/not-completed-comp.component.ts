import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/ToDo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-not-completed-comp',
  templateUrl: './not-completed-comp.component.html',
  styleUrls: ['./not-completed-comp.component.css']
})

export class NotCompletedCompComponent implements OnInit {

  toDoList: ToDo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getToDos().subscribe((todo) => {
      this.toDoList = todo;
    } )
  }

}
