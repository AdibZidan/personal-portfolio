import { MainComponent } from './main.component';

import { ComponentFixture, async, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { TaskService } from '../services/task.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from '../form/form.component';

import { BodyComponent } from '../body/body.component';

import { DialogComponent } from '../dialog/dialog.component';

import { Observable } from 'rxjs';

import { Task } from '../interface/Task';

describe('Main Component', () => {

  let mainComponent: MainComponent,
    mainFixture: ComponentFixture<MainComponent>,
    debugElement: DebugElement,
    htmlElement: HTMLElement,
    taskService: TaskService;

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

    debugElement = mainFixture.debugElement;

    htmlElement = debugElement.nativeElement;

    taskService = TestBed.get(TaskService);

  });

  it('Should exist', () =>
    expect(mainComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(mainComponent instanceof MainComponent)
      .toBeTruthy());

  fit(`Should have an undefined 'tasks$' before 'ngOnInit'`, () => {

    const tasks$: Observable<Task[]> = mainComponent.tasks$;

    expect(tasks$).toBeUndefined();

  });

  it(`Should have a 'date' property`, () => {

    const expectedDate: number = Date.now();

    const actualDate: number = mainComponent.date;

    expect(expectedDate).toBe(actualDate);

  });

});
