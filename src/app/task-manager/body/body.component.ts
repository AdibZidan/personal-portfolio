import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import { fadeIn, setLine } from '../../../assets/animations/animations';

import { TaskService } from '../services/task.service';

import { Title } from '@angular/platform-browser';

import { Task } from '../interface/Task';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [fadeIn]
})

export class BodyComponent implements OnInit, OnDestroy {

  @Input() public task: Task;

  @Output() public deleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  private subscription: Subscription;

  constructor(private taskService: TaskService, private titleService: Title) { }

  ngOnInit(): void { this.changeTitle(); }

  ngOnDestroy(): void { if (this.subscription !== undefined) { this.subscription.unsubscribe(); } }

  public setLineThrough(): object { return setLine(this.task); }

  public onToggle(task: Task): void {
    task.completed = !task.completed;

    this.subscription = this.taskService.toggleTaskFromBackEnd(task).subscribe();
  }

  public onDelete(task: Task): void { this.deleteTask.emit(task); }

  public async onEdit(task: Task): Promise<void> { await this.taskService.editTaskFromBackEnd(task).toPromise(); }

  private changeTitle(): void { this.titleService.setTitle('Task Manager'); }

}
