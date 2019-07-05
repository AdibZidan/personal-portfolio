import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormComponent } from '../form/form.component';

import { Todo } from 'src/app/classes/Todo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  @Input() todo: Todo;

  @Output() save: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnInit() { }

  onClick() {
    this.matDialogRef = this.dialog.open(FormComponent, {
      data: this.todo,
      autoFocus: true,
      disableClose: true,
      width: '40%'
    });

    this.matDialogRef.afterClosed().subscribe((todo: Todo) => this.save.emit(todo));
  }

}
