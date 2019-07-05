import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TodoService } from '../services/todo.service';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {

  private todos$: Observable<Todo[]>;

  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getTodos(); }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) { this.subscription.unsubscribe(); }
    console.log('Main unsubscribed!');
  }

  getTodos(): void {
    this.todos$ = this.todoService.getTodos();
    this.subscription = this.todoService.refresher.subscribe(() => this.getTodos());
  }

  addTodo(todo: Todo): void {
    this.subscription = this.todoService
      .addTodoToBackEnd(todo)
      .subscribe(() => this.getTodos());
  }

  deleteTodo(todo: Todo): void {
    this.subscription = this.todoService
      .deleteTodoFromBackEnd(todo)
      .subscribe(() => this.getTodos());
  }

}
