import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export class FormGroupMock {

  private _formGroup!: FormGroup;

  public constructor() {
    this._formGroup = new FormGroup({});
  }

  public getFormGroupMock(): FormGroup {
    return this._formGroup;
  }

  public withValidatorsFor(name: string, validatorFn: ValidatorFn[]): this {
    this._formGroup.get(name)?.setValidators(validatorFn);

    return this;
  }

  public withControl(name: string): this {
    this._formGroup.setControl(name, new FormControl(name));

    return this;
  }

}
