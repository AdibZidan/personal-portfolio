import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainComponent } from '../main/main.component';
import { FormComponent } from '../form/form.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { BodyComponent } from '../body/body.component';

import { LoadingSpinnerComponent } from '../../ui/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
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
