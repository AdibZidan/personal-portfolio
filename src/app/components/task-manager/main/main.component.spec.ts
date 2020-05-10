import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from '../../../shared/interfaces/task.interface';
import { TaskService } from '../../../shared/services/task-manager/task.service';
import { BodyComponent } from '../body/body.component';
import { DialogComponent } from '../dialog/dialog.component';
import { FormComponent } from '../form/form.component';
import { MainComponent } from './main.component';

describe('Main Component', () => {

  let mainComponent: MainComponent;
  let mainFixture: ComponentFixture<MainComponent>;

  let taskService: TaskService;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
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
      providers: [TaskService]
    }).compileComponents()));

  beforeEach(() => {
    mainFixture = TestBed.createComponent(MainComponent);
    mainComponent = mainFixture.componentInstance;

    taskService = TestBed.inject(TaskService);

    debugElement = mainFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  afterEach(() => mainFixture.destroy());

  it('Should exist', () =>
    expect(mainComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(mainComponent instanceof MainComponent)
      .toBeTruthy());

  it(`Should have an undefined 'tasks$' before 'ngOnInit'`, () => {
    const tasks$: Observable<Task[]> = mainComponent.tasks$;

    expect(tasks$).toBeUndefined();
  });

  it(`Should have a defined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = mainComponent.subscription;

    expect(subscription).toBeDefined();
  });

  it(`Should spy & call 'ngOnDestroy' method`, () => {
    spyOn(mainComponent, 'ngOnDestroy').and.callThrough();

    mainComponent.ngOnDestroy();

    expect(mainComponent.ngOnDestroy).toHaveBeenCalled();
  });

});
