import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoList: ToDo[] = [];
  doneOrNot: boolean = false;

  constructor(private toDoServices: TodoService) { }

  ngOnInit(): void {
    this.getToDo();

  }

  getToDo() {
    this.toDoServices.getToDos().subscribe((todos) => {
      this.toDoList = todos;
    })
  }
}
