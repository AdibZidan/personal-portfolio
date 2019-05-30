import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainComponent } from '../main/main.component';
import { FormComponent } from '../form/form.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { BodyComponent } from '../body/body.component';

import { LoadingSpinnerComponent } from '../../ui/loading-spinner/loading-spinner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog/';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    BodyComponent
  ],
  declarations: [
    MainComponent,
    FormComponent,
    AddButtonComponent,
    BodyComponent,
    LoadingSpinnerComponent
  ]
})

export class TodoModule { }
