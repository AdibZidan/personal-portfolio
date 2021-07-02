import { Validators } from '@angular/forms';
import { PERCENTAGE_PATTERN } from '@shared/helpers/form.helper';

export const FORM_GROUP_PROPS: any = {
  id: [null],
  title: [null, [Validators.required, Validators.minLength(3)]],
  description: [null, [Validators.required, Validators.minLength(6)]],
  percentage: [null, Validators.pattern(PERCENTAGE_PATTERN)],
  isComplete: [false]
};
