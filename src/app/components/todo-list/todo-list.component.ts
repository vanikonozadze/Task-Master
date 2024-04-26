import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  taskArray: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskArray = this.taskService.taskList;
  }
}
