import { Component } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todos';
    todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
    addTodo() {
      this.todos.push({
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      });
    }
}
