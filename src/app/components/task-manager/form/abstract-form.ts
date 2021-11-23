import { Directive, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive()
export abstract class AbstractForm implements OnInit {

  public formGroup!: FormGroup;

  public abstract formGroupProperties: any;

  protected constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public abstract onSubmit(): void;

  private initializeForm(): void {
    this.formGroup = this.formBuilder.group(this.formGroupProperties);
  }

}
