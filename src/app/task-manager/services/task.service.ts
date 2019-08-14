import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Task } from '../interface/Task';

@Injectable({ providedIn: 'root' })

export class TaskService {

  public baseUrl: string = environment.baseUrl;
  public refresher$: Subject<Task> = new Subject<Task>();

  constructor(private httpClient: HttpClient) { }

  get refresher() {
    return this.refresher$;
  }

  getTasksFromBackEnd(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  addTaskToBackEnd(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.baseUrl, task);
  }

  toggleTaskFromBackEnd(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/update/${task.id}`;

    return this.httpClient.put<Task>(url, task);
  }

  editTaskFromBackEnd(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/edit/${task.id}`;

    return this.httpClient
      .put<Task>(url, task)
      .pipe(tap(() => this.refresher$.next()));
  }

  deleteTaskFromBackEnd(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/delete/${task.id}`;

    return this.httpClient.delete<Task>(url);
  }

}
