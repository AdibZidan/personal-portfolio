import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { selectNumberOfTasksMessage } from '@shared/store/selectors/tasks/tasks.selector';
import { interval, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public date$!: Observable<number>;

  public numberOfTasksMessage$: Observable<string> = this.store$.select(selectNumberOfTasksMessage());

  public constructor(
    private store$: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.incrementSeconds();
  }

  private incrementSeconds(): void {
    this.date$ = interval(1_000)
      .pipe(
        startWith(new Date()),
        map((): number =>
          Date.now()
        ));
  }

}
