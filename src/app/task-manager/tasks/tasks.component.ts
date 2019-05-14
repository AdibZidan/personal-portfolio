import { Component, OnInit } from "@angular/core";

import { TaskService } from "./../services/task.service";

import { Task } from "./../../classes/Task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  task: Task;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.task = task;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
