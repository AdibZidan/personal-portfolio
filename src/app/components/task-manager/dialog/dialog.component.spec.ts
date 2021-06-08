import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Task } from '@shared/interfaces/task.interface';
import { taskMock } from '@shared/mocks/tasks-mock';
import { updateOne } from '@shared/store/actions/task/task.actions';
import { AppState } from '@shared/store/interfaces/app-state.interface';
import { Observable, of } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { DialogComponent } from './dialog.component';

describe('Dialog Component', () => {

  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  let mockStore: MockStore<AppState>;

  let matDialog: MatDialog;
  let matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [
        provideMockStore(),
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);

    matDialog = TestBed.inject(MatDialog);
    matDialogRef = TestBed.inject(MatDialogRef);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have an undefined task input property', () => {
      expect(component.task).toBeUndefined();
    });
  });

  describe('Methods', () => {
    let dispatchSpy: jasmine.Spy;

    beforeEach(() => {
      dispatchSpy = spyOn(mockStore, 'dispatch');
      component.task = taskMock;
    });

    it('Should open the dialog', () => {
      spyOn(matDialog, 'open')
        .and.returnValue({
          afterClosed: (): Observable<Task> =>
            of(component.task)
        } as any);

      component.openDialog();

      expect(matDialog.open).toHaveBeenCalled();
      expect(matDialog.open).toHaveBeenCalledTimes(1);
      expect(matDialog.open).toHaveBeenCalledWith(
        FormComponent,
        {
          data: component.task,
          autoFocus: true,
          hasBackdrop: true,
          panelClass: 'dialog'
        }
      );

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy.calls.first().args[0]).toEqual({
        id: taskMock.id,
        title: taskMock.title,
        description: taskMock.description,
        percentage: taskMock.percentage,
        isComplete: taskMock.isComplete,
        type: updateOne.type
      });
    });
  });

});
