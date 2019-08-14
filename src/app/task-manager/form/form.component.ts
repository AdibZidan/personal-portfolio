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

  private subscription: Subscription;

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
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  onFormBuild(): void {
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

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTask.emit(this.formGroup.value);
      this.matDialogRef.close(this.formGroup.value);
      this.formGroup.reset();
    }
  }

  get title(): AbstractControl {
    return this.formGroup.get('title');
  }

  get description(): AbstractControl {
    return this.formGroup.get('description');
  }

  get percentage(): AbstractControl {
    return this.formGroup.get('percentage');
  }

}
