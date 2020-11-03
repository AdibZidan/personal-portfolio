import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '@shared/interfaces/task.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  @Input()
  public task: Task;

  @Output()
  public addTask: EventEmitter<Task> = new EventEmitter<Task>();

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
    this.assignTaskToData();
    this.initializeForm();
    this.listenForFormValueChange();
    this.patchTask();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  private assignTaskToData(): void {
    this.task = this.data;
  }

  private initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      percentage: [''],
      completed: [false]
    });
  }

  private listenForFormValueChange(): void {
    this.subscription = this.formGroup
      .valueChanges
      .subscribe((): boolean =>
        this.isValidForm = this.formGroup.valid
      );
  }

  private patchTask(): void {
    this.formGroup.patchValue(this.task);
  }

}
