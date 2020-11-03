import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '@shared/interfaces/task.interface';
import { TaskService } from '@shared/services/task-manager/task.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];
  public tasks$: Observable<Task[]>;
  public date: number = Date.now();

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.updateTime();
  }

  ngOnDestroy(): void {
    this.subscriptions
      .forEach((subscription: Subscription): void =>
        subscription.unsubscribe()
      );
  }

  public addTask(task: Task): void {
    const subscription: Subscription = this.taskService
      .addTask$(task)
      .subscribe((): void =>
        this.getTasks()
      );

    this.subscriptions.push(subscription);
  }

  public deleteTask(task: Task): void {
    const subscription: Subscription = this.taskService
      .deleteTask$(task)
      .subscribe((): void =>
        this.getTasks()
      );

    this.subscriptions.push(subscription);
  }

  private getTasks(): void {
    this.tasks$ = this.taskService.getTasks$();
  }

  private updateTime(): void {
    setInterval((): number =>
      this.date = Date.now(),
      1000
    );
  }

}
