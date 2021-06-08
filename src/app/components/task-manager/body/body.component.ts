import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '@shared/interfaces/task.interface';
import { deleteOne, setIsCompleted } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  public tasks$: Observable<Task[]> = this.store$.select('tasks');

  public constructor(
    private store$: Store<AppState>
  ) { }

  public setIsCompleted(task: Task): void {
    this.store$.dispatch(setIsCompleted(task));
  }

  public deleteOne(id: number): void {
    this.store$.dispatch(deleteOne({ id }));
  }

}
