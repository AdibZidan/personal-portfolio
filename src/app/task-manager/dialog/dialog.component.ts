import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormComponent } from '../form/form.component';

import { Todo } from 'src/app/classes/Todo';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;

  @Output() save: EventEmitter<Todo> = new EventEmitter<Todo>();

  private subscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { if (this.subscription !== undefined) { this.subscription.unsubscribe(); } }

  onClick(): void {
    this.matDialogRef = this.dialog.open(FormComponent, {
      data: this.todo,
      autoFocus: true,
      disableClose: true,
      width: '600px',
      panelClass: 'dialog'
    });

    this.subscription = this.matDialogRef.afterClosed().subscribe((todo: Todo) => this.save.emit(todo));
  }

}
