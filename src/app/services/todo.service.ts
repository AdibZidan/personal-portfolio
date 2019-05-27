import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HTTPOPTIONS } from '../classes/HttpOptions'

import { Todo } from '../classes/Todo';

@Injectable({ providedIn: 'root' })

export class TodoService {

  private url: string = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(this.url)
      .pipe(tap(() => console.log('Fetched tasks')));
  }

  addTodoToBackEnd(todo: Todo): Observable<Todo> {

    return this.httpClient.post<Todo>(this.url, todo, HTTPOPTIONS);
  }

  toggleCompleted(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/${todo.id}`;

    return this.httpClient.put<Todo>(url, todo, HTTPOPTIONS);
  }

  deleteToDoFromBackEnd(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/delete/${todo.id}`;


    return this.httpClient.delete<Todo>(url, HTTPOPTIONS);
  }

  updateTodoFromBackEnd(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/edit/${todo.id}`;

    return this.httpClient.put<Todo>(url, todo);
  }

}
