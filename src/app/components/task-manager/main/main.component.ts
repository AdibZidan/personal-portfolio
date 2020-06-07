import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../../../shared/interfaces/task.interface';
import { TaskService } from '../../../shared/services/task-manager/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public tasks$: Observable<Task[]>;
  public date: number = Date.now();
  public subscription: Subscription = new Subscription();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    this.updateTime();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getTasks(): void {
    this.tasks$ = this.taskService.getTasksFromBackEnd();
    this.subscription = this.taskService
      .refresher
      .subscribe((): void => this.getTasks());
  }

  public addTask(task: Task): void {
    this.subscription = this.taskService
      .addTaskToBackEnd(task)
      .subscribe((): void =>
        this.getTasks()
      );
  }

  public deleteTask(task: Task): void {
    this.subscription = this.taskService
      .deleteTaskFromBackEnd(task)
      .subscribe((): void =>
        this.getTasks()
      );
  }

  public updateTime(): void {
    setInterval((): number =>
      this.date = Date.now(),
      1000
    );
  }

}