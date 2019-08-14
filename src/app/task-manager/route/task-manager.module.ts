import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { FormComponent } from '../form/form.component';
import { MainComponent } from '../main/main.component';
import { DialogComponent } from '../dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BodyComponent,
    DialogComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    FormComponent
  ],
  providers: [
    { provide: MatDialogRef }
  ]
})

export class TaskManagerModule { }
