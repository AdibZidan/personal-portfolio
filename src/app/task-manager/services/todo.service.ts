import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { tap } from 'rxjs/operators';

import { Todo } from '../../classes/Todo';

@Injectable({ providedIn: 'root' })

export class TodoService {

  private url: string = 'http://localhost:3000/tasks';

  private refresher$: Subject<Todo> = new Subject<Todo>();

  constructor(private httpClient: HttpClient) { }

  get refresher() { return this.refresher$; }

  getTodosFromBackEnd(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(this.url)
      .pipe(tap(() => console.log('Fetched tasks!')));
  }

  addTodoToBackEnd(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.url, todo);
  }

  toggleTodoFromBackEnd(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/update/${todo.id}`;

    return this.httpClient.put<Todo>(url, todo);
  }

  editTodoFromBackEnd(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/edit/${todo.id}`;

    return this.httpClient
      .put<Todo>(url, todo)
      .pipe(tap(() => console.log(todo)))
      .pipe(tap(() => this.refresher$.next()));
  }

  deleteTodoFromBackEnd(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/delete/${todo.id}`;

    return this.httpClient.delete<Todo>(url);
  }

}
