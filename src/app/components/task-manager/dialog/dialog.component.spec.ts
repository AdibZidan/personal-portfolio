import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { taskMock } from 'src/app/shared/mocks/tasks-mock';
import { FormComponent } from '../form/form.component';
import { DialogComponent } from './dialog.component';

describe('Dialog Component', () => {

  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  let matDialog: MatDialog;
  let matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;

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

    it('Should have a defined save output property', () => {
      expect(component.save).toEqual(new EventEmitter<Task>());
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      component.task = taskMock;
    });

    it('Should unsubscribe', () => {
      spyOn(
        component.subscription,
        'unsubscribe'
      );

      expect(component.subscription.unsubscribe).not.toHaveBeenCalled();
      expect(component.subscription.unsubscribe).toHaveBeenCalledTimes(0);

      component.ngOnDestroy();

      expect(component.subscription.unsubscribe).toHaveBeenCalled();
      expect(component.subscription.unsubscribe).toHaveBeenCalledTimes(1);
    });

    it('Should open the dialog', () => {
      spyOn(matDialog, 'open')
        .and.returnValue({
          afterClosed: (): Observable<Task> =>
            of(component.task)
        });

      spyOn(
        component.save,
        'emit'
      );

      component.onClick();

      expect(matDialog.open).toHaveBeenCalled();
      expect(matDialog.open).toHaveBeenCalledTimes(1);
      expect(matDialog.open).toHaveBeenCalledWith(
        FormComponent,
        {
          data: component.task,
          autoFocus: true,
          disableClose: true,
          width: '0 auto',
          panelClass: 'dialog'
        }
      );
      expect(component.save.emit).toHaveBeenCalled();
      expect(component.save.emit).toHaveBeenCalledTimes(1);
      expect(component.save.emit).toHaveBeenCalledWith(component.task);
    });
  });

});
