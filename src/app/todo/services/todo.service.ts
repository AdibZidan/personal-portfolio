import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Todo } from "./../../classes/Todo";

import { HTTPOPTIONS } from "./../../classes/HttpOptions";

@Injectable({ providedIn: "root" })

export class TodoService {

  private url: string = "https://jsonplaceholder.typicode.com/todos";
  private urlLimit: string = "?_limit=5";

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.url}${this.urlLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url: string = `${this.url}/${todo.id}`;

    return this.httpClient.put(url, todo, HTTPOPTIONS);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/${todo.id}`;

    return this.httpClient.delete<Todo>(url, HTTPOPTIONS);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.url, todo, HTTPOPTIONS);
  }

}
