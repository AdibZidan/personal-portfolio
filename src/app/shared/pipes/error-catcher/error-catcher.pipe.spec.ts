import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PERCENTAGE_PATTERN } from '@shared/helpers/form.helper';
import { FormGroupMock } from '@shared/mocks/form-group.mock';
import { ErrorCatcherPipe } from './error-catcher.pipe';

describe('ErrorCatcherPipe', () => {

  let pipe: ErrorCatcherPipe;

  beforeEach(() => {
    pipe = new ErrorCatcherPipe();
  });

  it('Should create', () => {
    expect(pipe).toBeTruthy();
  });

  describe('After initialization', () => {

    let formGroupMock: FormGroup;
    let label: string;
    let abstractControl: FormControl;

    beforeEach(() => {
      formGroupMock = new FormGroupMock()
        .withControl('username')
        .withValidatorsFor('username', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(6)
        ])
        .getFormGroupMock();

      label = 'Username';
      abstractControl = formGroupMock.get('username') as FormControl;
    });

    describe('Methods', () => {
      it('Should return no validation errors if the form control is not tempered with', () => {
        expect(pipe.transform(abstractControl, label)).toEqual([]);
      });

      it('Should get the required validation error', () => {
        abstractControl.markAsTouched();
        abstractControl.setValue('');

        expect(pipe.transform(abstractControl, label)).toEqual([`${label} is required`]);
      });

      it('Should get the minLength error', () => {
        abstractControl.markAsTouched();
        abstractControl.setValue('A');

        expect(pipe.transform(abstractControl, label)).toEqual(['Minimum is 3 characters']);
      });

      it('Should get the pattern error', () => {
        abstractControl.setValidators(Validators.pattern(PERCENTAGE_PATTERN));

        abstractControl.markAsTouched();
        abstractControl.setValue(-1);

        expect(pipe.transform(abstractControl, label)).toEqual([`${label} needs to be between 0 and 100`]);
      });
    });
  });

});
