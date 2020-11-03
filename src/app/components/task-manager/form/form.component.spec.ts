import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '@shared/interfaces/task.interface';
import { taskMock } from '@shared/mocks/tasks-mock';
import { Subscription } from 'rxjs';
import { FormComponent } from './form.component';

describe('Form Component', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let matDialog: MatDialog;
  let matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
      ],
      declarations: [FormComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => { }
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
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

    it('Should have a defined addTask output property', () => {
      expect(component.addTask).toEqual(new EventEmitter<Task>());
    });

    it('Should have an undefined formGroup property', () => {
      expect(component.formGroup).toBeUndefined();
    });

    it('Should have a defined isValidForm property', () => {
      expect(component.isValidForm).toEqual(false);
    });

    it('Should have a defined validNumberPattern property', () => {
      const expectedValidNumberPattern: string = '^[1-9][0-9]?$|^100$';

      expect(component.validNumberPattern).toEqual(expectedValidNumberPattern);
    });

    it('Should have a defined errorMessage property', () => {
      const expectedErrorMessage: string = 'Please fill the form above';

      expect(component.errorMessage).toEqual(expectedErrorMessage);
    });

    it('Should have a defined subscription property', () => {
      expect(component.subscription).toEqual(new Subscription());
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      component.task = taskMock;
      component.ngOnInit();
      fixture.detectChanges();
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

    it('Should assign the task property to data', () => {
      // Reason that the task is an empty object is because MAT_DIALOG_DATA uses an empty object by default.
      // See the providers array at the top.
      expect(component.task).toEqual({} as any);
    });

    it('Should initialize the form', () => {
      component.onSubmit();

      expect(component.formGroup).toBeDefined();
      expect(component.formGroup.valid).toEqual(false);
      expect(component.isValidForm).toEqual(false);
    });

    it('Should validate the title input', () => {
      component.formGroup.controls.title.markAsTouched();
      expect(component.formGroup.controls.title.errors).toEqual({
        required: true
      });

      component.formGroup.controls.title.setValue('12');
      expect(component.formGroup.controls.title.errors).toEqual({
        minlength: {
          requiredLength: 3,
          actualLength: 2
        }
      });

      component.formGroup.controls.title.setValue('123');
      expect(component.formGroup.controls.title.errors).toBeNull();
    });

    it('Should validate the description input', () => {
      component.formGroup.controls.description.markAsTouched();
      expect(component.formGroup.controls.description.errors).toEqual({
        required: true
      });

      component.formGroup.controls.description.setValue('123');
      expect(component.formGroup.controls.description.errors).toEqual({
        minlength: {
          requiredLength: 6,
          actualLength: 3
        }
      });

      component.formGroup.controls.description.setValue('123456');
      expect(component.formGroup.controls.description.errors).toBeNull();
    });

    it('Should validate the percentage input', () => {
      component.formGroup.controls.percentage.markAsTouched();
      expect(component.formGroup.controls.percentage.errors).toBeNull();
    });

    it('Should initially have a completed input value with the value of false', () => {
      expect(component.formGroup.controls.completed.value).toEqual(false);
    });

    it('Should allow for form submission if the form is valid', () => {
      component.formGroup.controls.title.setValue('Test Title');
      component.formGroup.controls.description.setValue('Test Description');
      component.formGroup.controls.percentage.setValue(100);

      expect(component.title.value).toEqual('Test Title');
      expect(component.description.value).toEqual('Test Description');
      expect(component.percentage.value).toEqual(100);
      expect(component.formGroup.valid).toEqual(true);

      spyOn(component.addTask, 'emit');
      spyOn(matDialogRef, 'close');
      spyOn(component.formGroup, 'reset');

      component.onSubmit();

      expect(component.addTask.emit).toHaveBeenCalledWith({
        id: '',
        title: 'Test Title',
        description: 'Test Description',
        percentage: 100,
        completed: false
      });
      expect(matDialogRef.close).toHaveBeenCalledWith({
        id: '',
        title: 'Test Title',
        description: 'Test Description',
        percentage: 100,
        completed: false
      });
      expect(component.formGroup.reset).toHaveBeenCalled();
    });
  });

});
