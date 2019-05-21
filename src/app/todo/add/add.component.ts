import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Todo } from './../../classes/Todo';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})

export class AddComponent implements OnInit {
  @Output() add: EventEmitter<Todo> = new EventEmitter();

  private title: string;

  constructor() { }

  ngOnInit() { }

  onSubmit(): void {
    const todo: Todo = {
      id: 1,
      title: this.title,
      completed: false
    };

    this.add.emit(todo);
  }

}
