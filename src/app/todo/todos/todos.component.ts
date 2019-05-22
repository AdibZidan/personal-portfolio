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

  constructor(private todoService: TodoService) { }

  ngOnInit() { this.getTasks(); }

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
  }

}