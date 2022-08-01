import { Component, Input } from '@angular/core';
import { Todo } from '@myorg/data';
@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent  {
  @Input() todos: Todo[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  
}
