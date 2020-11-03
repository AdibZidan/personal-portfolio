import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { BodyComponent } from '@components/task-manager/body/body.component';
import { DialogComponent } from '@components/task-manager/dialog/dialog.component';
import { FormComponent } from '@components/task-manager/form/form.component';
import { MainComponent } from '@components/task-manager/main/main.component';
import { TaskManagerRoutingModule } from './task-manager-routing.module';

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
  providers: [{
    provide: MatDialogRef,
    useValue: undefined
  }]
})
export class TaskManagerModule { }
