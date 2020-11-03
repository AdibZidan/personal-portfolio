import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taskServiceSpy } from '@shared/mocks/task-service.mock';
import { taskMock } from '@shared/mocks/tasks-mock';
import { TaskService } from '@shared/services/task-manager/task.service';
import { of } from 'rxjs';
import { BodyComponent } from '../body/body.component';
import { DialogComponent } from '../dialog/dialog.component';
import { FormComponent } from '../form/form.component';
import { MainComponent } from './main.component';

describe('Main Component', () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let taskService: jasmine.SpyObj<TaskService>;

  beforeEach(waitForAsync(() =>
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        MainComponent,
        FormComponent,
        BodyComponent,
        DialogComponent
      ],
      providers: [{
        provide: TaskService,
        useValue: taskServiceSpy
      }]
    }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
  });

  it('Should exist', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties', () => {
    it('Should have an undefined tasks$ property', () => {
      expect(component.tasks$).toBeUndefined();
    });

    it('Should have a defined date property', () => {
      expect(component.date).toBeDefined();
    });

    it('Should have a empty subscriptions property', () => {
      expect(component.subscriptions).toEqual([]);
    });
  });

  describe('Methods', () => {
    it('Should fetch the tasks', () => {
      component.ngOnInit();

      expect(component.tasks$).toEqual(taskService.getTasks$());
      expect(component.subscriptions.length).toEqual(0);
    });

    it('Should have an updated time after a second', fakeAsync(() => {
      component.date = 0;
      component.ngOnInit();

      tick(1000);

      expect(component.date).toBeGreaterThan(0);

      discardPeriodicTasks();
    }));

    it('Should add the task', () => {
      taskService.addTask$.and.returnValue(of(taskMock));
      component.addTask(taskMock);

      expect(taskService.addTask$).toHaveBeenCalledWith(taskMock);
      expect(component.subscriptions.length).toEqual(1);
    });

    it('Should delete the task', () => {
      taskService.deleteTask$.and.returnValue(of(taskMock));
      component.deleteTask(taskMock);

      expect(taskService.deleteTask$).toHaveBeenCalledWith(taskMock);
      expect(component.subscriptions.length).toEqual(1);
    });
  });

});
