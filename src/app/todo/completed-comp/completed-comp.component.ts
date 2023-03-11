import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/ToDo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completed-comp',
  templateUrl: './completed-comp.component.html',
  styleUrls: ['./completed-comp.component.css']
})

export class CompletedCompComponent implements OnInit {

  toDoList: ToDo[] = [];
  completedToDoList: ToDo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getToDos().subscribe((todos) => {
      this.toDoList = todos;
    })
  }
}
