import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AddTaskComponent } from "./components/add-update-task/add-update-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task/Task';
import { AddUpdateTask } from '../../types/task/AddUpdateTask';
import { TodoDangerBtnComponent } from "../../shared/buttons/todo-danger-btn/todo-danger-btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent, TodoDangerBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  checkedTasks: Set<string> = new Set<string>();

  taskIdToEdit: string | null = null;
  taskToEdit: AddUpdateTask | null = null;
  
  private readonly taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  } 

  addTask(addTask: AddUpdateTask): void {
    this.taskService.addTask(addTask);
    this.tasks = [...this.taskService.getTasks()];
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
    this.tasks = [...this.taskService.getTasks()];
  }

  startEditTask(taskId: string): void {
    var task = this.tasks.find(task => task.id === taskId);

    if(!task) {
      return;
    }

    this.taskIdToEdit = taskId;
    this.taskToEdit = {
      name: task.name 
    }
  }

  selectTask(taskId: string): void {
    if(this.checkedTasks.has(taskId)) {
      this.checkedTasks.delete(taskId);
    } else {
      this.checkedTasks.add(taskId);
    }    
  }

  deleteSelectedTasks(): void {
    this.taskService.deleteRangeTasks(Array.from(this.checkedTasks.values()));
    this.tasks = [...this.taskService.getTasks()];
    this.checkedTasks.clear();
  }

  editTask(editTask: AddUpdateTask): void {
    if(!this.taskIdToEdit) {
      return;
    }

    this.taskService.updateTask(this.taskIdToEdit, editTask);
    this.tasks = [...this.taskService.getTasks()];
  }
}
