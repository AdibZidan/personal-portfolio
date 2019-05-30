import { TodoService } from './../../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  // private todos: Todo[] = [];
  private todos$: Observable<Todo[]>;
  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  ngOnDestroy(): void {

  }

  getTodos(): void {
    this.todos$ = this.todoService.getTodos();
    // .subscribe(todosToAdd => this.todos = todosToAdd);
  }

  addTodo(todo: Todo): void {
    this.todoService
      .addTodoToBackEnd(todo)
      // .subscribe((todoToAdd: Todo) => this.todos.push(todoToAdd));
      .subscribe(() => this.getTodos());
  }

  deleteTodo(todo: Todo): void {
    // this.todos$ = this.todos
    //   .filter((todoToBeDeleted: Todo) =>
    //     todo.id !== todoToBeDeleted.id);

    this.todoService
      .deleteToDoFromBackEnd(todo)
      .subscribe(() => this.getTodos());
  }

}
