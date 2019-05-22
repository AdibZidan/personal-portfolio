import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../classes/Todo';

@Component({
  selector: "app-add-input",
  templateUrl: "./add-input.component.html",
  styleUrls: ["./add-input.component.scss"]
})

export class AddInputComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  formGroup: FormGroup;
  isValid: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false]
    });

    this.formGroup.valueChanges.subscribe(() => this.isValid = this.formGroup.valid);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTodo.emit(this.formGroup.value);
      console.log(this.formGroup.value);
    } else {
      console.log('Invalid!');
    }

    // this.formGroup.reset();
  }

}
