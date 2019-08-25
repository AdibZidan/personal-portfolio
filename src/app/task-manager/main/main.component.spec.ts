import { MainComponent } from './main.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { BodyComponent } from '../body/body.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../interface/Task';

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

    taskService = TestBed.get(TaskService);

    debugElement = mainFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

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

  it(`Should have an  undefined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = mainComponent.subscription;

    expect(subscription).toBeUndefined();
  });

  it(`Should spy & call 'ngOnDestroy' method`, () => {
    mainComponent.subscription = new Subscription();

    spyOn(mainComponent, 'ngOnDestroy').and.callThrough();

    mainComponent.ngOnDestroy();

    expect(mainComponent.ngOnDestroy).toHaveBeenCalled();
  });

});
