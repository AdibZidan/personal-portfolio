import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from "@angular/core";

import { TodoService } from "./../services/todo.service";

import { Todo } from "src/app/classes/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todoService: TodoService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.getTasks();
    this.getTodosFromLocalStorage();
    console.log(this.localStorage.retrieve('Todos'));

  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(todos => (this.todos = todos));
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(todoToRemove => todo.title !== todoToRemove.title);

    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo): void {
    this.todoService
      .addTodo(todo)
      .subscribe((todoToAdd: Todo) => this.todos.push(todoToAdd));

    this.localStorage.store('Todos', this.todos);
    this.todos = this.localStorage.retrieve('Todos');

    localStorage.setItem('Todos', JSON.stringify(this.todos));
  }

  getTodosFromLocalStorage() {
    if (localStorage.getItem('Todos') === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem('Todos'));
    }
  }

}