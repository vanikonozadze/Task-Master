import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css'],
})
export class TodoListFormComponent implements OnInit {
  taskModelData: string = '';

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  addList() {
    if (this.taskModelData.trim() !== '') {
      const newTask: Task = {
        description: this.taskModelData,
        showDeleteButton: false,
      };
      this.taskService.addTask(newTask);
      this.taskModelData = '';
    }
  }

  toggleDarkModeMethod() {
    this.taskService.toggleDarkMode();
  }
}
