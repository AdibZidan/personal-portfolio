import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import { trigger, style, animate, transition, } from '@angular/animations';

import { TaskService } from '../services/task.service';

import { Task } from '../interface/Task';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class BodyComponent implements OnInit, OnDestroy {

  @Input() task: Task;

  @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  private subscription: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { if (this.subscription !== undefined) { this.subscription.unsubscribe(); } }

  setLineThrough(): object {
    const lineThrough: object = {
      'is-complete': this.task.completed
    };

    return lineThrough;
  }

  onToggle(task: Task): void {
    task.completed = !task.completed;

    this.subscription = this.taskService.toggleTaskFromBackEnd(task).subscribe(taskOnToggle => console.log(taskOnToggle));
  }

  onDelete(task: Task) { this.deleteTask.emit(task); }

  async onEdit(task: Task) { await this.taskService.editTaskFromBackEnd(task).toPromise(); }

}
