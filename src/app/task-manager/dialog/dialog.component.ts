import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormComponent } from '../form/form.component';

import { Task } from 'src/app/task-manager/interface/Task';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit, OnDestroy {

  @Input() task: Task;

  @Output() save: EventEmitter<Task> = new EventEmitter<Task>();

  private subscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { if (this.subscription !== undefined) { this.subscription.unsubscribe(); } }

  onClick(): void {
    this.matDialogRef = this.dialog.open(FormComponent, {
      data: this.task,
      autoFocus: true,
      disableClose: true,
      width: '600px',
      panelClass: 'dialog'
    });

    this.subscription = this.matDialogRef.afterClosed().subscribe((task: Task) => this.save.emit(task));
  }

}
