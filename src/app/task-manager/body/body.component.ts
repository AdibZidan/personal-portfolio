import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { fadeIn, setLine } from '../../../assets/animations/animations';
import { Task } from '../interface/Task';
import { Subscription } from 'rxjs';
import { TaskService } from '../services/task.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [fadeIn]
})

export class BodyComponent implements OnInit, OnDestroy {

  @Input() public task: Task;
  @Output() public deleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  public subscription: Subscription;

  constructor(private taskService: TaskService, private titleService: Title) { }

  ngOnInit(): void { this.changeTitle(); }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  public setLineThrough(): object {
    return setLine(this.task);
  }

  public onToggleFromUI(task: Task): void {
    task.completed = !task.completed;
  }

  public onToggleFromBackEnd(task: Task): void {
    this.subscription = this.taskService.toggleTaskFromBackEnd(task).subscribe();
  }

  public onDelete(task: Task): void {
    this.deleteTask.emit(task);
  }

  public async onEdit(task: Task): Promise<void> {
    await this.taskService.editTaskFromBackEnd(task).toPromise();
  }

  public changeTitle(): void {
    this.titleService.setTitle('Task Manager');
  }

}
