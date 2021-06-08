import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PERCENTAGE_PATTERN } from '@shared/helpers/form.helper';
import { AbstractControlValueAccessor } from '../abstract-control-value-accessor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends AbstractControlValueAccessor {

  @Input()
  public className: string = '';

  @Input()
  public type: string = '';

  public validNumberPattern = PERCENTAGE_PATTERN;

  public customOnChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.writeValue(value);
    this.onChange(value);
  }

}
