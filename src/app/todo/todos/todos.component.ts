import { Component, OnInit } from "@angular/core";

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

  add(todo: Todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  showLocalStorage() {
    const savedTodo = localStorage.getItem('todo');

    if (savedTodo) {
      this.todos = JSON.parse(savedTodo);
    } else {
      this.todos = [];
    }
  }

  clearLocalStorage() {
    window.location.reload();
    localStorage.clear();
  }

}
