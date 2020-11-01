import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Task } from '../../../shared/interfaces/task.interface';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnDestroy {

  @Input()
  public task: Task;

  @Output()
  public save: EventEmitter<Task> = new EventEmitter<Task>();

  public subscription: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onClick(): void {
    this.matDialogRef = this.dialog
      .open(FormComponent, this.getDialogProperties());

    this.subscription = this.matDialogRef
      .afterClosed()
      .subscribe((task: Task): void =>
        this.save.emit(task)
      );
  }

  private getDialogProperties() {
    return {
      data: this.task,
      autoFocus: true,
      disableClose: true,
      width: '0 auto',
      panelClass: 'dialog'
    };
  }

}
