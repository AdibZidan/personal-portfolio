import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { TodoService } from "./../services/todo.service";

import { Todo } from "../../classes/Todo";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})

export class ItemComponent implements OnInit {
  // @Input() todo: Todo;
  // @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  // constructor(private todoService: TodoService) { }

  ngOnInit() { }

  // setLineThrough(): object {
  //   const lineThrough = { todo: true, 'is-complete': this.todo.completed };

  //   return lineThrough;
  // }

  // onToggle(todo: Todo): void {
  //   todo.completed = !todo.completed;

  //   this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  // }

  // onDelete(todo: Todo): void {
  //   this.deleteTodo.emit(todo);
  // }

}
