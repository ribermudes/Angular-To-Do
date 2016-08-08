import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCategoryState = args[0];
    console.log("In Cateogry Pipe");
    console.log(desiredCategoryState);
    if(desiredCategoryState === "all") {
      return input;
    } else {
      return input.filter((task) => {
        return (task.category === desiredCategoryState);
      });
    }
  }
}
