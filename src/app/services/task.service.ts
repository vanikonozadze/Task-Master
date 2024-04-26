import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: string[] = [];

  constructor() {}

  addTasks(task: string) {
    this.taskList.push(task);
  }
}
