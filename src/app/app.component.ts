import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.taskService.darkModeChanged.subscribe((darkMode: boolean) => {
      if (!darkMode) {
        document.documentElement.style.backgroundColor = '#ffffff';
      } else {
        document.documentElement.style.backgroundColor = '';
      }
    });
  }
}
