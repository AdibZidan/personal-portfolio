import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PERCENTAGE_PATTERN } from '@shared/helpers/form.helper';
import { Task } from '@shared/interfaces/task.interface';
import { addOne } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGroup!: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
    private matDialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: Task
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      const task: Task = this.formGroup.value;

      if (this.matDialogRef === undefined) {
        this.store$.dispatch(addOne(task));
        this.formGroup.reset();
      } else {
        this.matDialogRef.close(task);
      }
    }
  }

  private initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(6)]],
      percentage: [null, Validators.pattern(PERCENTAGE_PATTERN)],
      isComplete: [false]
    });

    this.formGroup.patchValue(this.data);
  }

}
