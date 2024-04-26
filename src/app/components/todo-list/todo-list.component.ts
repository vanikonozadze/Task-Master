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

  toggleComplete(task: string): void {
    const index = this.taskArray.indexOf(task);
    if (index !== -1) {
      this.taskService.toggleCompletion(index);
    }
  }

  isTaskCompleted(task: string): boolean {
    return this.taskService.isTaskCompleted(task);
  }

  clearCompletedArray(): void {
    console.log(this.taskService.taskList);
    console.log(this.taskService.completedTasks);

    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < this.taskService.completedTasks.length; i++) {
      if (this.taskService.completedTasks[i] === true) {
        if (startIndex === -1) {
          startIndex = i;
        }
        endIndex = i;
      } else {
        if (startIndex !== -1 && endIndex !== -1) {
          this.taskService.taskList.splice(
            startIndex,
            endIndex - startIndex + 1
          );
          this.taskService.completedTasks.splice(
            startIndex,
            endIndex - startIndex + 1
          );
          startIndex = -1;
          endIndex = -1;
        }
      }
    }

    if (startIndex !== -1 && endIndex !== -1) {
      this.taskService.taskList.splice(startIndex, endIndex - startIndex + 1);
      this.taskService.completedTasks.splice(
        startIndex,
        endIndex - startIndex + 1
      );
    }
  }
}
