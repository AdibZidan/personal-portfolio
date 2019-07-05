import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';

import { Todo } from 'src/app/classes/Todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  private todo: Todo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    // this.todo = await this.todoService.getTodo(id).toPromise();
  }

  async edit(todo: Todo) {
    await this.todoService.editTodoFromBackEnd(todo).toPromise();
    this.router.navigateByUrl('/todo');
  }

}
