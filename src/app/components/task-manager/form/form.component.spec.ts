import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { PERCENTAGE_PATTERN } from '@shared/helpers/form.helper';
import { FormComponent } from './form.component';

describe('Form Component', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let matDialog: MatDialog;
  let matDialogRef: MatDialogRef<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatDialogModule
      ],
      declarations: [FormComponent],
      providers: [
        provideMockStore(),
        {
          provide: MatDialogRef,
          useValue: undefined
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
    it('Should have an undefined formGroup property', () => {
      expect(component.formGroup).toBeUndefined();
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should initialize the form', () => {
      component.onSubmit();

      expect(component.formGroup).toBeDefined();
      expect(component.formGroup.valid).toEqual(false);
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
      component.formGroup.controls.percentage.setValue(1000);
      expect(component.formGroup.controls.percentage.errors).toEqual({
        pattern: {
          requiredPattern: PERCENTAGE_PATTERN,
          actualValue: 1000
        }
      });

      component.formGroup.controls.percentage.setValue(100);
      expect(component.formGroup.controls.percentage.errors).toBeNull();
    });

    it('Should initially have an isComplete input value with the value of false', () => {
      expect(component.formGroup.controls.isComplete.value).toEqual(false);
    });

    it('Should allow for form submission if the form is valid', () => {
      component.formGroup.controls.title.setValue('Test Title');
      component.formGroup.controls.description.setValue('Test Description');
      component.formGroup.controls.percentage.setValue(100);

      expect(component.formGroup.controls.title.value).toEqual('Test Title');
      expect(component.formGroup.controls.description.value).toEqual('Test Description');
      expect(component.formGroup.controls.percentage.value).toEqual(100);
      expect(component.formGroup.valid).toEqual(true);

      spyOn(component.formGroup, 'reset');

      component.onSubmit();

      expect(component.formGroup.reset).toHaveBeenCalled();
    });
  });

});
