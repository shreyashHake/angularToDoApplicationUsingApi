import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ToDo } from './ToDo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/todos/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  toDoList: [] = [];

  constructor(
    private http: HttpClient){}

    getToDos() {
      return this.http.get<ToDo[]>(this.heroesUrl);
    }
}
