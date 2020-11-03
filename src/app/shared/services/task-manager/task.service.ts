import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@shared/interfaces/task.interface';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _refresher$: Subject<Task> = new Subject<Task>();

  public readonly baseUrl: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  public get refresher(): Subject<Task> {
    return this._refresher$;
  }

  public getTasks$(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  public addTask$(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.baseUrl, task);
  }

  public toggleTask$(task: Task): Observable<Task> {
    const url: string = `${this.baseUrl}/update/${task.id}`;

    return this.httpClient.put<Task>(url, task);
  }

  public editTask$(task: Task): Observable<Task> {
    const url: string = `${this.baseUrl}/edit/${task.id}`;

    return this.httpClient
      .put<Task>(url, task)
      .pipe(tap(() => this._refresher$.next()));
  }

  public deleteTask$(task: Task): Observable<Task> {
    const url: string = `${this.baseUrl}/delete/${task.id}`;

    return this.httpClient.delete<Task>(url);
  }

}
