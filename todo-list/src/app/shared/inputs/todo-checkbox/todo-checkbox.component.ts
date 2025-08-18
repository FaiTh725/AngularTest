import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { TodoEmptyBtnComponent } from "../../buttons/todo-empty-btn/todo-empty-btn.component";

@Component({
  selector: 'app-todo-checkbox',
  standalone: true,
  imports: [TodoEmptyBtnComponent],
  template: `
    <app-todo-empty-btn 
      class="checkbox full-size" 
      (click)="handleCheck()">
      @if (isCheck()) {
        <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="38" height="35" fill="url(#pattern0_0_118)"/>
          <defs>
          <pattern id="pattern0_0_118" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_0_118" transform="matrix(0.02 0 0 0.0217143 0 -0.0428571)"/>
          </pattern>
          <image id="image0_0_118" width="50" height="50" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO2ZPWhUQRDHf36gYqJETIIgCBYpFEylWGos7GLIh502YpnYidjlo7EN2KZKlUo9GzttbMQk2mihpAqCKJyeMQGNriz8Hzww4e2+XPbtJfuDbY6ZnZm3s7szt5BIJLZCNzAFLAIrgAk8VoAFYBLoKhvECNCowHmzyfgODJUJ4q8meARcAtoITxtwGXgsX/4Agz7plK3EXeLhnnz6BnS6KEzlViI2avJtwkX4jYRtOsVGn3yzB0AhPyTcTnwckW829QvJTolYMa7+pUACYdKKBObgTliREeAjcLaVA7kIrMr2nVYN5CSwLLszBbLRBmIvubey+QI40IqB7AWeyN574JiDTpSBTMvWV6DHUSe6QG7Lzi8Vg65EFchV4Leat5ueuqaZgewD5oBb+HMGqMuG7X2oMpBhydgvOubhhO0+l6RrP8QeD91tS61R9dBW9oGD/CHgpeRfA4ddnAm1R24o1638Qx2nG2G//KzklnUBlsVs12a/BqxJxzq7fwOZ8Vxn1+sxd/BTqy/3z0tNaZRxXXtpHej3nLeS4/cC8EW6z1V6nAd+6jefQ6Hye+Qc8En6r4DPuf3TLEyoC/E08CE3z7NN9k1ZTMib/YQq2ndAB83FhC5RjgOnaD4mplprK5gUSGSYXbcijYj/xD6ae70qZFHC9qUoNq7It3kX4UkJ2+eu2Hgq32wRWkiXls7ouSsW7sunuu4oJ4ZyTVNN1W0Ve6Zd6ZSthPVpwHeSQT08mkhGvUwQGZ16eJzPPcmFHA21xeM+6ZRIJPiPfwtEbQPoqffwAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
      } 
      @else {
        <svg width="38" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" fill="#FFFEFE" stroke="black"/>
        </svg>
      }
    </app-todo-empty-btn>
  `,
  styleUrl: './todo-checkbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCheckboxComponent {
  isCheck = model<boolean>(false);

  handleCheck(): void {
    this.isCheck.update(check => !check);
  }
}
