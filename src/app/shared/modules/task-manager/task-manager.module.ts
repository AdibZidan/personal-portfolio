import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../../../components/task-manager/body/body.component';
import { DialogComponent } from '../../../components/task-manager/dialog/dialog.component';
import { FormComponent } from '../../../components/task-manager/form/form.component';
import { MainComponent } from '../../../components/task-manager/main/main.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

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
  entryComponents: [FormComponent],
  providers: [
    { provide: MatDialogRef, useValue: undefined }
  ]
})
export class TaskManagerModule { }
