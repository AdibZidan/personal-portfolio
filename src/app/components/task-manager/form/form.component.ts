import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';
import { addOne } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { AbstractForm } from './abstract-form';
import { FORM_GROUP_PROPS } from './form-group-props';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends AbstractForm {

  formGroupProperties: any = FORM_GROUP_PROPS;

  public constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: Task,
    private store$: Store<AppState>,
    private matDialogRef: MatDialogRef<FormComponent>,
    formBuilder: FormBuilder
  ) {
    super(formBuilder);
    super.ngOnInit();
  }

  public ngOnInit(): void {
    this.formGroup.patchValue(this.data);
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

}
