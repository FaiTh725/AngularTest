import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoEmptyBtnComponent } from "../../buttons/todo-empty-btn/todo-empty-btn.component";

@Component({
  selector: 'app-todo-search',
  imports: [TodoEmptyBtnComponent],
  template: `
    <div class="input-wrapper full-size d-flex align-center">
      <input class="input m-right10 fs18" 
        type="text" 
        [value]="searchValue" 
        [placeholder]="placeholder"
        (change)="inputChanged($event)">
      <app-todo-empty-btn 
        class="d-flex align-center" 
        (btnClick)="search.emit(searchValue)">
        <svg class="search-img" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="29" height="28" fill="url(#pattern0_0_14)"/>
          <defs>
          <pattern id="pattern0_0_14" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_0_14" transform="matrix(0.03125 0 0 0.0323661 0 -0.0178571)"/>
          </pattern>
          <image id="image0_0_14" width="32" height="32" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJLSURBVFiFvda/S9VRGMfx1xGFhmiQyEqKokUHHXIIQqi5JQzamhQanNscEqKxxf6BFpcIweVKS7gFEv3AEBoiIkqcwghJ1E7DPeLxcu/3fr/emw8c7nO+9zmf531+nxBj1MpCCD24jgmM4xwGsIl1rGERtRjjr5ZCRRZjbFowineIJcomplppFZVmiXsxg+0miX6gho/Ya/J/DYNHBsBlrDSIPk9TMNgQexI38BC/s/ifuFsZIPU8T76BO6VEuILlrO02RqoCzGQCL3G60lAS8CDTeIu+UgBpwW1nPa+UvAFkPoOYLRGvp2G1lxr2AsF+9S0asYPRdgDj+YLrJHkmeifTnGsH8CQLnugSQC+2kuaXotieNAL7tqILFmPcxYdUvRRCON8qtkf9eIX1GOP3bgAke5P5F4oABpL/vovJYTXzzxYBbCb/YpcB8l5/KwJYT/5wCOFkFwHG0u+e+q3ZEmAt88daBXYA8DnG+KcIYDGr3+xG5hDCEM6k6mpRLJxSXwdR/Va70uEZEPDKwdlyq8xdMJU1WEboAGA601pqG581rGUNHxwx+ZCDt8EOhqsADKo/JvYh5tFfYdinHX6YLJRq2yB01+Gn2Lr6xdLbptf5nO+Xv5isBJAER9QfE7nYFl7jKe7jUZqyjYa4HSyk5KUgWvWqD7NJsMyrOGJpf84xWRai3dyOYg5fmiTcxSe8aLbVykJUWeHncQ23cRUnSrRpC3GkvV6ltIP47wDtII4FoAji2ABaQNw7VoAmEF9D+nisFkK4h8d49g97Y4rvmTgN6wAAAABJRU5ErkJggg=="/>
          </defs>
        </svg>
      </app-todo-empty-btn>
    </div>
  `,
  styleUrl: './todo-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSearchComponent {
  @Input() placeholder: string = '';
  @Input() searchValue: string = '';

  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  inputChanged(e: Event): void {
    const inputElement = e.target as HTMLInputElement;

    this.searchValue = inputElement.value;
    this.searchValueChanged.emit(this.searchValue);
  }
}
