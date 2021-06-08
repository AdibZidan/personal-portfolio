import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';
import { updateOne } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { Subscription } from 'rxjs';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnDestroy {

  private _subscription: Subscription = new Subscription();

  @Input()
  public task!: Task;

  public constructor(
    private store$: Store<AppState>,
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<FormComponent>
  ) { }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public openDialog(): void {
    this.matDialogRef = this.dialog.open(
      FormComponent,
      this.getDialogProperties()
    );

    this._subscription = this.matDialogRef
      .afterClosed()
      .subscribe((task: Task): void =>
        this.store$.dispatch(updateOne(task))
      );
  }

  private getDialogProperties(): object {
    return {
      data: this.task,
      autoFocus: true,
      hasBackdrop: true,
      panelClass: 'dialog'
    };
  }

}
