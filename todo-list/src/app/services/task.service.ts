import { inject, Injectable } from '@angular/core';
import { Task } from '../types/task/Task';
import { AddUpdateTask } from '../types/task/AddUpdateTask';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly uuidService: UuidService = inject(UuidService);
  
  tasks: Task[] = [
    {
      id: this.uuidService.generateUuid(),
      name: "test",
      creationTime: new Date(2025, 8, 16, 10, 15)
    },
    {
      id: this.uuidService.generateUuid(),
      name: "test2",
      creationTime: new Date(2025, 6, 16, 10, 15)
    },
    {
      id: this.uuidService.generateUuid(),
      name: "test3",
      creationTime: new Date(2025, 3, 17, 10, 15)
    },
    {
      id: this.uuidService.generateUuid(),
      name: "test4",
      creationTime: new Date(2025, 3, 19, 10, 15)
    },
    {
      id: this.uuidService.generateUuid(),
      name: "test5",
      creationTime: new Date(2025, 6, 16, 22, 0)
    },
  ];

  addTask(task: AddUpdateTask): void {


    const newTask: Task = {
      id: this.uuidService.generateUuid(),
      name: task.name,
      creationTime: new Date()
    };

    this.tasks.push(newTask);
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  deleteRangeTasks(taskIds: string[]): void {
    this.tasks = this.tasks.filter(task => !taskIds.includes(task.id));
  }

  updateTask(taskId: string, updateTask: AddUpdateTask): void {
    this.tasks = this.tasks
    .map(task => 
      task.id === taskId ? 
      {...task, name: updateTask.name} : 
      task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
