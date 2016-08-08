import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';
import { PriorityPipe } from './priority.pipe';
import { CategoryPipe } from './category.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, PriorityPipe, CategoryPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)="onDoneChange($event.target.value)" class="filter input-lg">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <select (change)="onPriorityChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option value="High">Show High Priority</option>
    <option value="Medium">Show Medium Priority</option>
    <option value="Low">Show Low Priority</option>
  </select>
  <select (change)="onCategoryChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option value="Work">Work</option>
    <option value="Hobby">Hobby</option>
    <option value="Home">Home</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone | priority:filterPriority | category:filterCategory"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask"></edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  public filterPriority: string = "all";
  public filterCategory: string = "all";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(parameters: string[]): void {
    this.taskList.push(
      new Task(parameters[0], this.taskList.length, parameters[1], parameters[2])
    );
  }
  onDoneChange(filterOption) {
    this.filterDone = filterOption;
  }
  onPriorityChange(filterOption) {
    this.filterPriority = filterOption;
  }
  onCategoryChange(filterOption) {
    this.filterCategory = filterOption;
  }
}
