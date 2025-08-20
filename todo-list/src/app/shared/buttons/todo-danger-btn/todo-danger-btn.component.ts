import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-danger-btn',
  standalone: true,
  imports: [],
  template: `
    <button class="danged-btn full-width r18 fs28" (click)="btnClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './todo-danger-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDangerBtnComponent {
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

}
