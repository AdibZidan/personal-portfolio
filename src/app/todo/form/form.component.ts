import { Component, OnInit, Output, EventEmitter, Input, Inject, OnDestroy } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../classes/Todo';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;

  @Output() addTodo = new EventEmitter<Todo>();

  private subscription: Subscription;

  private formGroup: FormGroup;

  private isValidForm: boolean = false;
  private validNumberPattern: string = '^[1-9][0-9]?$|^100$';

  private errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Todo
  ) { }

  ngOnInit() { this.onFormBuild(); }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) { this.subscription.unsubscribe(); }
    console.log('Form unsubscribed!');
  }

  onFormBuild() {
    this.todo = this.data;

    this.formGroup = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });

    this.subscription = this.formGroup.valueChanges.subscribe(() => this.isValidForm = this.formGroup.valid);

    this.formGroup.patchValue(this.todo);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTodo.emit(this.formGroup.value);
      this.matDialogRef.close(this.formGroup.value);
    }
  }

  onClick(): void { setTimeout(() => this.errorMessage = 'Please fill the form above', 200); }

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