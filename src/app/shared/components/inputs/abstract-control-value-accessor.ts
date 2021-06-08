import { Directive, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class AbstractControlValueAccessor implements OnInit, ControlValueAccessor {

  public value!: string;
  public onChange!: (value: string) => void;
  public onTouched!: () => void;
  public isDisabled!: boolean;

  @Input()
  public abstractControl!: null | AbstractControl;

  @Input()
  public formControlName: string = '';

  @Input()
  public isRequired: boolean = false;

  @Input()
  public placeholder: string = '';

  @Input()
  public label: string = '';

  public constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) { }

  public ngOnInit(): void {
    if (this.controlContainer) {
      if (this.controlContainer.control) {
        this.abstractControl = this.controlContainer.control.get(this.formControlName);
      }
    }

    this.isRequired = this.abstractControl?.errors?.required;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public abstract customOnChange(event: Event): void;

}
