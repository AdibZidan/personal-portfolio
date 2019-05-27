import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../classes/Todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<Todo>();

  private formGroup: FormGroup;
  private isValidForm: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: [''],
      percentage: [''],
      completed: [false]
    });

    this.formGroup.valueChanges
      .subscribe(() => this.isValidForm = this.formGroup.valid);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTodo.emit(this.formGroup.value);
    } else {
      console.log('Form is invalid!');
    }
  }

}