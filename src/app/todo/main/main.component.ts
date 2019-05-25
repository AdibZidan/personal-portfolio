import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

import { Todo } from './../../classes/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getTodos(); }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todosToAdd => this.todos = todosToAdd);
  }

  addTodo(todo: Todo): void {
    this.todoService
      .addTodoToBackEnd(todo)
      .subscribe((todoToAdd: Todo) => this.todos.push(todoToAdd));
  }

  deleteToDo(todo: Todo): void {
    this.todos = this.todos
      .filter((todoToBeDeleted: Todo) =>
        todo.id !== todoToBeDeleted.id);

    this.todoService
      .deleteToDoFromBackEnd(todo)
      .subscribe(todosToDelete => console.log(todosToDelete));
  }

}
