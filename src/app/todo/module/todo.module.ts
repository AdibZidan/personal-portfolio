import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainComponent } from '../main/main.component';
import { FormComponent } from '../form/form.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyComponent } from '../body/body.component';
import { EditComponent } from '../edit/edit.component';

import { LoadingSpinnerComponent } from '../../ui/loading-spinner/loading-spinner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [
    BodyComponent,
    FormComponent
  ],
  declarations: [
    MainComponent,
    FormComponent,
    AddButtonComponent,
    DialogComponent,
    BodyComponent,
    EditComponent,
    LoadingSpinnerComponent
  ]
})

export class TodoModule { }
