import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from 'src/app/services/todo.service';

import { Todo } from '../../classes/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Input() todo: Todo;

  @Output() save = new EventEmitter<Todo>();
  @Output() addTodo = new EventEmitter<Todo>();

  private formGroup: FormGroup;
  private isValidForm: boolean = false;
  private validNumberPattern: string = '^[1-9][0-9]?$|^100$';

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });

    this.formGroup.valueChanges
      .subscribe(() => this.isValidForm = this.formGroup.valid);

    this.formGroup.patchValue(this.todo);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTodo.emit(this.formGroup.value);
      this.save.emit(this.formGroup.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  async edit(todo: Todo) {
    await this.todoService.editTodoFromBackEnd(todo).toPromise();
    this.router.navigateByUrl('/todo');
  }

  get title() {
    return this.formGroup.get('title');
  }

  get description() {
    return this.formGroup.get('description');
  }

  get percentage() {
    return this.formGroup.get('percentage');
  }

}