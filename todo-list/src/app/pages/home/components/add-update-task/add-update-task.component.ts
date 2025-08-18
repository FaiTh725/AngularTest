import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TodoInputComponent } from "../../../../shared/inputs/todo-input/todo-input.component";
import { TodoPrimaryBtnComponent } from "../../../../shared/buttons/todo-primary-btn/todo-primary-btn.component";
import { AddUpdateTask } from '../../../../types/task/AddUpdateTask';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskValidations } from '../../../../shared/consts/validations/TaskValidations';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TodoInputComponent, TodoPrimaryBtnComponent, ReactiveFormsModule],
  templateUrl: './add-update-task.component.html',
  styleUrl: './add-update-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnChanges {
  addEditTaskForm!: FormGroup;
  
  @Input() taskToEdit: AddUpdateTask | null = null;
  @Output() addTask = new EventEmitter<AddUpdateTask>();
  @Output() editTask = new EventEmitter<AddUpdateTask>();

  private readonly fb:FormBuilder = inject(FormBuilder);

  constructor() {
    this.initializeForm();
  }

  get editEnabled(): boolean {
    return this.taskToEdit !== null && !!this.taskToEdit!.name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['taskToEdit'] !== null) {
      this.taskToEdit = {...changes['taskToEdit'].currentValue};
      
      this.addEditTaskForm.patchValue({
        name: this.taskToEdit!.name
      });
    } else if (this.taskToEdit !== null) {
      this.taskToEdit == null;
    }
  }

  handleSubmit(e: SubmitEvent): void {
    e.preventDefault();
    
    if(!this.addEditTaskForm.valid) {
      return;
    }

    if(this.editEnabled) {
      this.editTask.emit({
        ...this.addEditTaskForm.value
      })
    } else {
      this.addTask.emit({
        ...this.addEditTaskForm.value
      });
    }

    this.addEditTaskForm.setValue({
      name: ''
    });

    this.taskToEdit = null;
  }

  private initializeForm() {
    this.addEditTaskForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.maxLength(TaskValidations.MAX_TASK_NAME), 
        Validators.minLength(TaskValidations.MIN_TASK_NAME)]]
    })
  }
}
