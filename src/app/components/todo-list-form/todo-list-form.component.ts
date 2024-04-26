import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css'],
})
export class TodoListComponent implements OnInit {
  taskName: string = '';

  constructor() {}

  ngOnInit(): void {}

  addList() {
    alert(this.taskName);
  }
}
