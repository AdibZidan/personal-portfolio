import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of, Subscription } from 'rxjs';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { taskServiceSpy } from 'src/app/shared/mocks/task-service.mock';
import { taskMock } from 'src/app/shared/mocks/tasks-mock';
import { TaskService } from '../../../shared/services/task-manager/task.service';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyComponent } from './body.component';

describe('Body Component', () => {

  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  let taskService: jasmine.SpyObj<TaskService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [
        BodyComponent,
        DialogComponent
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: undefined
        },
        {
          provide: TaskService,
          useValue: taskServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
  });

  it('Should exist', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have an undefined task input property', () => {
      expect(component.task).toBeUndefined();
    });

    it('Should have a defined deleteTask output property', () => {
      expect(component.deleteTask).toEqual(new EventEmitter<Task>());
    });

    it('Should have a defined subscription property', () => {
      expect(component.subscription).toEqual(new Subscription());
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

    it('Should set a line through a task', () => {
      expect(component.setLineThrough()).toEqual({
        'is-complete': component.task.completed
      });
    });

    it('Should toggle the task from the UI', () => {
      expect(component.task.completed).toEqual(false);

      component.onToggleFromUI(component.task);

      expect(component.task.completed).toEqual(true);
    });

    it('Should toggle the task from task service', () => {
      taskService.toggleTaskFromBackEnd.and.returnValue(of(component.task));

      component.onToggleFromBackEnd(component.task);

      expect(taskService.toggleTaskFromBackEnd).toHaveBeenCalled();
      expect(taskService.toggleTaskFromBackEnd).toHaveBeenCalledTimes(1);
      expect(taskService.toggleTaskFromBackEnd).toHaveBeenCalledWith(component.task);
    });

    it('Should emit task deletion', () => {
      spyOn(
        component.deleteTask,
        'emit'
      );

      component.onDelete(component.task);

      expect(component.deleteTask.emit).toHaveBeenCalled();
      expect(component.deleteTask.emit).toHaveBeenCalledTimes(1);
      expect(component.deleteTask.emit).toHaveBeenCalledWith(component.task);
    });

    it('Should edit a task', () => {
      taskService.editTaskFromBackEnd.and.returnValue(of(component.task));

      component.onEdit(component.task);

      expect(taskService.editTaskFromBackEnd).toHaveBeenCalledTimes(1);
      expect(taskService.editTaskFromBackEnd).toHaveBeenCalledWith(component.task);
      expect(taskService.editTaskFromBackEnd).toHaveBeenCalled();
    });
  });

});
