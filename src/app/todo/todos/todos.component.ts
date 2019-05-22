import { Component, OnInit } from "@angular/core";

import { TodoService } from "./../services/todo.service";

import { Todo } from "src/app/classes/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
    this.showLocalStorage();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log(todo);
    this.saveTodoToLocalStorage();
    console.log(this.todos);
  }

  saveTodoToLocalStorage(): void {
    console.log(this.todos);

    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  showLocalStorage(): void {
    const savedTodo = localStorage.getItem('todo');

    if (savedTodo) {
      this.todos = JSON.parse(savedTodo);
    } else {
      this.todos = [];
    }
  }

}