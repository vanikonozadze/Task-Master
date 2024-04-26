import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: Task[] = [];
  completedTasks: boolean[] = [];

  constructor() {}

  addTask(task: Task): void {
    this.taskList.push(task);
    this.completedTasks.push(false);
  }

  toggleCompletion(index: number): void {
    this.completedTasks[index] = !this.completedTasks[index];
  }

  isTaskCompleted(task: Task): boolean {
    const index = this.taskList.indexOf(task);
    if (index !== -1) {
      return this.completedTasks[index];
    }
    return false;
  }
}
