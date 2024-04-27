import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  darkMode = false;
  darkModeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  taskList: Task[] = [];
  completedTasks: boolean[] = [];

  constructor() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeChanged.emit(this.darkMode);
  }

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
