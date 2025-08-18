import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../../types/task/Task';
import { TaskItemComponent } from "../../../../components/task-item/task-item.component";
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() checkedTasks: Set<string> = new Set<string>();
  
  @Output() deleteTask: EventEmitter<string> = new EventEmitter<string>();
  @Output() editTask: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectTask: EventEmitter<string> = new EventEmitter<string>();
}
