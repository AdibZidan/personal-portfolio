import { DialogComponent } from "./dialog.component";

import { MatDialog, MatDialogRef } from '@angular/material';
import { FormComponent } from '../form/form.component';

describe('Dialog Component', () => {

  it('Should exist', () => { expect(DialogComponent).toBeDefined(); });

  it('Should be built with 2 arguments; MatDialog and MatDialogRef<FormComponent> types', () => {

    let matDialog: MatDialog, matDialogRef: MatDialogRef<FormComponent>;

    const appComponent = new DialogComponent(matDialog, matDialogRef);

    expect(appComponent instanceof DialogComponent).toBe(true);

  });

});
