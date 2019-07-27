import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { TaskService } from '../services/task.service';

import { Task } from '../interface/Task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {

  public tasks$: Observable<Task[]>;

  public date: number = Date.now();

  private subscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    this.updateTime();
  }


  ngOnDestroy(): void { this.subscription.unsubscribe(); }

  public getTasks(): void {
    this.tasks$ = this.taskService.getTasksFromBackEnd();
    this.subscription = this.taskService.refresher.subscribe(() => this.getTasks());
  }

  public addTask(task: Task): void {
    this.subscription = this.taskService
      .addTaskToBackEnd(task)
      .subscribe(() => this.getTasks());
  }

  public deleteTask(task: Task): void {
    this.subscription = this.taskService
      .deleteTaskFromBackEnd(task)
      .subscribe(() => this.getTasks());
  }

  private updateTime(): void { setInterval(() => this.date = Date.now(), 1000); }

}
