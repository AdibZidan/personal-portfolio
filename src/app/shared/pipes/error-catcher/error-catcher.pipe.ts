import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorCatcher',
  pure: false
})
export class ErrorCatcherPipe implements PipeTransform {

  public transform(abstractControl: null | AbstractControl, label: string): string[] {
    const errors: string[] = [];

    const validationErrors: null | ValidationErrors = abstractControl?.errors;

    if (validationErrors !== null) {
      Object.keys(validationErrors).forEach((validationError: string): void => {
        switch (validationError) {
          case 'required':
            errors.push(`${label} is ${validationError}`);
            break;
          case 'minlength':
            errors.push(`Minimum is ${abstractControl?.errors?.minlength.requiredLength} characters`);
            break;
          case 'pattern':
            errors.push(`${label} needs to be between 0 and 100`);
            break;
        }
      });
    }

    return errors;
  }

}
