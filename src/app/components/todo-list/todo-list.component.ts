import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  taskArray: string[] = [];
  activeArray: string[] = [];
  activeBool: boolean = false;
  showAllBool: boolean = false;
  completedBool: boolean = false;

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

  showAllTasks() {
    this.showAllBool = !this.showAllBool;
    this.activeBool = false;
    this.completedBool = false;

    this.taskArray = this.taskService.taskList;
  }

  showActiveTasks() {
    this.activeBool = !this.activeBool;
    this.showAllBool = false;
    this.completedBool = false;

    if (this.activeBool) {
      this.taskArray = this.taskService.taskList.filter((task, index) => {
        return !this.taskService.completedTasks[index];
      });
    } else {
      this.taskArray = this.taskService.taskList;
    }
  }

  showCompletedTasks() {
    this.completedBool = !this.completedBool;
    this.activeBool = false;
    this.showAllBool = false;

    if (this.completedBool) {
      this.taskArray = this.taskService.taskList.filter((task, index) => {
        return this.taskService.completedTasks[index];
      });
    } else {
      this.taskArray = this.taskService.taskList;
    }
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
