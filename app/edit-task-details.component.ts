import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component ({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <br>
    <h3> Edit Description: {{ task.description}}</h3>
    <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
