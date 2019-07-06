import { NgModule } from '@angular/core';

import { MainComponent } from '../main/main.component';
import { FormComponent } from '../form/form.component';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyComponent } from '../body/body.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material';

import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainComponent,
    FormComponent,
    DialogComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [FormComponent],
  providers: [{ provide: MatDialogRef }]
})

export class TodoModule { }
