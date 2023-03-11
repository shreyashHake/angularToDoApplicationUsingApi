import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ToDo } from './ToDo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/todos/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  toDoList: ToDo[] = [];

  constructor(
    private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  getToDos() {
    return this.http.get<ToDo[]>(this.heroesUrl);
  }

  getToDo(id: number | string) {
    return this.getToDos().pipe(
      map((heroes: ToDo[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
