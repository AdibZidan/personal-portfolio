import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TodoService } from './../../services/todo.service';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  // private todos: Todo[] = [];
  private todos$: Observable<Todo[]>;
  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getTodos(); }

  getTodos(): void {
    this.todos$ = this.todoService.getTodos();
    this.todoService.refresher.subscribe(() => this.getTodos());
    // .subscribe(todosToAdd => this.todos = todosToAdd);
  }

  addTodo(todo: Todo): void {
    this.todoService
      .addTodoToBackEnd(todo)
      .subscribe(() => this.getTodos());
    // .subscribe((todoToAdd: Todo) => this.todos.push(todoToAdd));
  }

  deleteTodo(todo: Todo): void {
    // this.todos$ = this.todos
    //   .filter((todoToBeDeleted: Todo) =>
    //     todo.id !== todoToBeDeleted.id);

    this.todoService
      .deleteTodoFromBackEnd(todo)
      .subscribe(() => this.getTodos());
  }

}
