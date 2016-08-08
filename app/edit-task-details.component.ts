import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component ({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <br>
    <div class="container">
      <h3> Edit Description: {{ task.description}}</h3>
      <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
    </div>
    <div class="container">
      <h4> Edit Priority: {{ task.priority}}</h4>
      <select class="input-lg" [(ngModel)]="task.priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div class="container">
    <h4> Edit Category: {{ task.category}}</h4>
    <select class="input-lg" [(ngModel)]="task.category">
      <option value="Home">Home</option>
      <option value="Work">Work</option>
      <option value="Hobby">Hobby</option>
    </select>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
