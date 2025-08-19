import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-dropdown',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="dropdown d-flex align-center r18 full-size">
      <p class="selected-item fs18 m-right30" (click)="openDropDown()">
        @if(this.selectedIndex !== null) {
          {{ displayCallBack(this.selectedIndex) }}
        }
        @else {
          Select any value
        }
      </p>
      <div class="dropdown-arrow" (click)="openDropDown()" [ngClass]="isOpen ? 'dropdown-arrow__open' : ''">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="25" height="25" fill="url(#pattern0_0_20)"/>
          <defs>
          <pattern id="pattern0_0_20" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_0_20" transform="scale(0.04)"/>
          </pattern>
          <image id="image0_0_20" width="25" height="25" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAn0lEQVR4nO2UQQrCMBBF3w1qm2jBq+k1RJvWiuDBJTCFLtqaKZON5EEgi/lJ/s8kUCjMCEAH3BWjE10yH03xXt0L8BoBcNA68RKBhgCclBqewDGx1mldzIXxMlMY9rjQiJ3iMKsL9IaxrtJvuPHAAwOcxLbEaOFiImbeGrT5z4c2LLhoMCYAZ5nHiG5koJJOmr6dmkxcgTdwybVB4Y/4AnBtFqeueClsAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
      </div>
      <div class="dropdown-list full-width fs18 r18" [ngClass]="!isOpen ? 'dropdown-list__close' : ''">
        @for (item of items; track $index) {
          <p (click)="selectItem($index)" class="dropdown-list-item">{{ displayCallBack($index) }}</p>
        }
      </div>
    </div>
  `,
  styleUrl: './todo-dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDropdownComponent<T> {
  @Input() items: T[] = [];
  @Input() selectedIndex: number | null = null;
  @Input() displayCallBack: (selectedIndex: number) => string = selectedIndex => String(this.items[selectedIndex]);

  @Output() selectedIndexChanged = new EventEmitter<number>();
  isOpen: boolean = false;

  openDropDown(): void {
    this.isOpen = !this.isOpen;
  }

  selectItem(itemIndex: number): void {
    this.selectedIndex = itemIndex;
    this.selectedIndexChanged.emit(this.selectedIndex);
    
    this.isOpen = false;
  }
}
