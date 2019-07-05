import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoService } from './../../services/todo.service';

import { Todo } from './../../classes/Todo';

import { trigger, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class BodyComponent implements OnInit {
  @Input() todo: Todo;

  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  setLineThrough(): object {
    const lineThrough = {
      'is-complete': this.todo.completed
    };

    return lineThrough;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;

    this.todoService.toggleCompleted(todo).subscribe(todoOnToggle => console.log(todoOnToggle));
  }

  onDelete(todo: Todo) { this.deleteToDo.emit(todo); }

  async onEdit(todo: Todo) { await this.todoService.editTodoFromBackEnd(todo).toPromise(); }

}
