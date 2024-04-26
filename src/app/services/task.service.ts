import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: string[] = [];
  completedTasks: boolean[] = [];

  constructor() {}

  addTask(task: string): void {
    this.taskList.push(task);
    this.completedTasks.push(false);
  }

  toggleCompletion(index: number): void {
    this.completedTasks[index] = !this.completedTasks[index];
  }

  isTaskCompleted(task: string): boolean {
    const index = this.taskList.indexOf(task);
    if (index !== -1) {
      return this.completedTasks[index];
    }
    return false;
  }
}
