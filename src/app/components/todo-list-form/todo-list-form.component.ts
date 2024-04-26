import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css'],
})
export class TodoListFormComponent implements OnInit {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addList() {
    this.taskService.addTask(this.taskName);
    this.taskName = '';
  }
}
