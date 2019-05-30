import { FormComponent } from './../form/form.component';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoService } from './../../services/todo.service';

import { Todo } from './../../classes/Todo';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter();

  private todos$: Observable<Todo[]>;
  private editTodo: Todo;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

  setLineThrough(): object {
    const lineThrough = {
      'is-complete': this.todo.completed
    };

    return lineThrough;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;

    this.todoService
      .toggleCompleted(todo)
      .subscribe(todoOnToggle => console.log(todoOnToggle));
    
    this.dialog.open(FormComponent)
  }

  onDelete(todo: Todo) {
    this.deleteToDo.emit(todo);
  }

  onEdit(todo: Todo) {
    this.editTodo = todo;

    const title = this.editTodo.title;

    console.log(title);
  }

  // onUpdate() {
  //   if (this.onEdit) {
  //     this.todoService
  //       .updateTodoFromBackEnd(this.editTodo)
  //       .subscribe((todo: Todo) => {
  //         if (todo.id > -1) {
  //           this.todos[todo.id] = todo;
  //         }
  //       });
  //     this.onEdit = undefined;
  //   }
  // }

  // onUpdate(index: number, newTodo: Todo) {
  //   this.todos[index] = newTodo;

  // }

}
