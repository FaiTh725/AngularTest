import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-primary-btn',
  standalone: true,
  imports: [],
  template: `
    <button
      class="todo-btn fs24 d-flex content-between align-center r18"
      (click)="btnClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './todo-primary-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPrimaryBtnComponent {
  @Output() btnClick = new EventEmitter<MouseEvent>();
}
