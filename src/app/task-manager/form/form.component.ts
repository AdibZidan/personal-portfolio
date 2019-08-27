import { Component, OnInit, Output, EventEmitter, Input, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Task } from '../interface/Task';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy {

  @Input() public task: Task;
  @Output() public addTask: EventEmitter<Task> = new EventEmitter<Task>();

  public formGroup: FormGroup;
  public isValidForm = false;
  public validNumberPattern = '^[1-9][0-9]?$|^100$';
  public errorMessage = 'Please fill the form above';
  public subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: Task
  ) { }

  ngOnInit(): void {
    this.onFormBuild();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onFormBuild(): void {
    this.task = this.data;

    this.formGroup = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });

    this.subscription = this.formGroup.valueChanges.subscribe(() => this.isValidForm = this.formGroup.valid);

    this.formGroup.patchValue(this.task);
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTask.emit(this.formGroup.value);
      this.matDialogRef.close(this.formGroup.value);
      this.formGroup.reset();
    }
  }

  public get title(): AbstractControl {
    return this.formGroup.get('title');
  }

  public get description(): AbstractControl {
    return this.formGroup.get('description');
  }

  public get percentage(): AbstractControl {
    return this.formGroup.get('percentage');
  }

}
