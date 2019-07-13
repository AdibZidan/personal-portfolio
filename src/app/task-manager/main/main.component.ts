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

  tasks$: Observable<Task[]>;

  private subscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { this.getTasks(); }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }

  getTasks(): void {
    this.tasks$ = this.taskService.getTasksFromBackEnd();
    this.subscription = this.taskService.refresher.subscribe(() => this.getTasks());
  }

  addTask(task: Task): void {
    this.subscription = this.taskService
      .addTaskToBackEnd(task)
      .subscribe(() => this.getTasks());
  }

  deleteTask(task: Task): void {
    this.subscription = this.taskService
      .deleteTaskFromBackEnd(task)
      .subscribe(() => this.getTasks());
  }

}
