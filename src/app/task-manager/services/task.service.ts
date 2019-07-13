import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { tap } from 'rxjs/operators';

import { Task } from '../interface/Task'; 

@Injectable({ providedIn: 'root' })

export class TaskService {

  private url: string = 'http://localhost:3000/tasks';

  private refresher$: Subject<Task> = new Subject<Task>();

  constructor(private httpClient: HttpClient) { }

  get refresher() { return this.refresher$; }

  getTasksFromBackEnd(): Observable<Task[]> {
    return this.httpClient
      .get<Task[]>(this.url)
      .pipe(tap(() => console.log('Fetched tasks!')));
  }

  addTaskToBackEnd(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, task);
  }

  toggleTaskFromBackEnd(task: Task): Observable<Task> {
    const url: string = `${this.url}/update/${task.id}`;

    return this.httpClient.put<Task>(url, task);
  }

  editTaskFromBackEnd(task: Task): Observable<Task> {
    const url: string = `${this.url}/edit/${task.id}`;

    return this.httpClient
      .put<Task>(url, task)
      .pipe(tap(() => this.refresher$.next()))
      .pipe(tap(() => console.log(task)));
  }

  deleteTaskFromBackEnd(task: Task): Observable<Task> {
    const url: string = `${this.url}/delete/${task.id}`;

    return this.httpClient.delete<Task>(url);
  }

}
