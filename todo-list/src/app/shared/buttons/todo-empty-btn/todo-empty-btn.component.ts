import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-todo-empty-btn',
  imports: [],
  template: `
    <button class="full-size empty-btn" 
      (click)="btnClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './todo-empty-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEmptyBtnComponent {
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>(); 

}
