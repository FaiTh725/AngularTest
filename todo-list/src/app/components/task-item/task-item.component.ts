import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task/Task';
import { TodoEmptyBtnComponent } from "../../shared/buttons/todo-empty-btn/todo-empty-btn.component";
import { TodoCheckboxComponent } from "../../shared/inputs/todo-checkbox/todo-checkbox.component";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [TodoEmptyBtnComponent, TodoCheckboxComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Input() isChecked: boolean = false;
  @Output() deleteTask: EventEmitter<string> = new EventEmitter<string>();
  @Output() editTask: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectTask: EventEmitter<string> = new EventEmitter<string>();
  
  isCheckChanged(): void {
    this.selectTask.emit(this.task.id);
  }
}
