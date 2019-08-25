import { DialogComponent } from './dialog.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { Subscription } from 'rxjs';

describe('Dialog Component', () => {

  let dialogComponent: DialogComponent;
  let dialogFixture: ComponentFixture<DialogComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [
        { provide: MatDialog },
        { provide: MatDialogRef }
      ]
    }).compileComponents()));

  beforeEach(() => {
    dialogFixture = TestBed.createComponent(DialogComponent);
    dialogComponent = dialogFixture.componentInstance;

    debugElement = dialogFixture.debugElement;
    htmlElement = debugElement.nativeElement;
  });

  it('Should exist', () =>
    expect(dialogComponent)
      .toBeDefined());

  it('Should be built/compiled', () =>
    expect(dialogComponent instanceof DialogComponent)
      .toBeTruthy());

  it(`Should have an 'undefined task input' before 'ngOnInit'`, () => {
    const taskInput = dialogComponent.task;

    expect(taskInput).toBeUndefined();
  });

  it(`Should have an undefined 'subscription' property before 'ngOnInit'`, () => {
    const subscription = dialogComponent.subscription;

    expect(subscription).toBeUndefined();
  });

  it(`Should spy & call 'ngOnDestroy method'`, () => {
    dialogFixture.detectChanges();

    dialogComponent.subscription = new Subscription();

    spyOn(dialogComponent, 'ngOnDestroy').and.callThrough();

    dialogComponent.ngOnDestroy();

    expect(dialogComponent.ngOnDestroy).toHaveBeenCalled();
  });

});
