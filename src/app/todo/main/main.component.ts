import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  // private todos: Todo[] = [];
  private todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getTodos(); }

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
