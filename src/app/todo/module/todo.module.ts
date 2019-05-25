import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from '../main/main.component';
import { FormComponent } from '../form/form.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { BodyComponent } from '../body/body.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    FormComponent,
    AddButtonComponent,
    BodyComponent,
  ]
})

export class TodoModule { }
