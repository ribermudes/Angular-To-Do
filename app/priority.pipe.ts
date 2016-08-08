import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredPriorityState = args[0];
    console.log("In Priority Pipe");
    console.log(desiredPriorityState);
    if(desiredPriorityState === "all") {
      return input;
    } else {
      return input.filter((task) => {
        return (task.priority === desiredPriorityState);
      });
    }
  }
}
