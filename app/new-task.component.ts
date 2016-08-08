import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form container">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select class="input-lg" #newPriority>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
    <select class="input-lg" #newCategory>
      <option value="Home">Home</option>
      <option value="Work">Work</option>
      <option value="Hobby">Hobby</option>
    </select>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    console.log(userPriority);
    var creationParameters: string[] = [userDescription.value, userPriority.value, userCategory.value];
    this.onSubmitNewTask.emit(creationParameters);
    userDescription.value = "";
  }
}
