import { FormComponent } from "./form.component";

import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Task } from '../interface/Task';

describe('Form Component', () => {

  it('Should exist', () => expect(FormComponent).toBeDefined());

  it('Should be built with 3 arguments; FormBuilder, MatDialogRef<FormComponent> and Task', () => {

    let formBuilder: FormBuilder, matDialogRef: MatDialogRef<FormComponent>, data: Task;

    const formComponent = new FormComponent(formBuilder, matDialogRef, data);

    expect(formComponent instanceof FormComponent).toBeTruthy();

  });

});
