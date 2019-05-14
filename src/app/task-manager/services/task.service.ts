import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

import { Task } from "./../../classes/Task";
import { TASKS } from "src/app/mock/mock-tasks";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private messageService: MessageService) {}

  getTasks(): Observable<Task[]> {
    this.messageService.add("Task Service: fetched tasks");
    return of(TASKS);
  }
}
