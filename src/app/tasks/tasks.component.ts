import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  //private taskService = new TasksService();
  //we can create object and use this. same way we will use it in different places
  // same can be done through dependency injection
  constructor(public taskService: TasksService) {}
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
  // onAddTask(taskData: NewTaskData) {
  //   this.taskService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }
}
