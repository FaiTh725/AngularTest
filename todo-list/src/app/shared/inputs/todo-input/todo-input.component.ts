import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  template: `
  <input 
    #input
    class="input full-size fs32"
    [type]="type" 
    [placeholder]="placeholder"
    [(ngModel)]="value" 
    (ngModelChange)="changeValue($event)"
    >
  <p class="error fs24 m-top10">
    {{errorMessage}}
  </p>`,
  styleUrl: './todo-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TodoInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TodoInputComponent
    }
  ]
})
export class TodoInputComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  
  value: string = '';
  errorMessage: string = '';
  control!: any;
  
  onChange = (value: string): void => {};
  onTouched = () => {};
  
  touched = false;
  disabled = false;
  
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly controlContainer: ControlContainer = inject(ControlContainer);
  private readonly elementRef: ElementRef = inject(ElementRef);
  
  ngOnInit(): void {
    const formControlName =
      this.elementRef.nativeElement.getAttribute('formcontrolname');
    this.control = this.controlContainer?.control?.get(formControlName) || null;
  }

  writeValue(value: string): void {
    if(this.disabled) {
      return;
    }
    this.value = value;
    this.cdr.markForCheck();
  }
  
  registerOnChange(onChange: (value: string) => void): void {
    this.onChange = onChange;
  }
  
  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }
  
  registerOnValidatorChange?(fn: () => void): void {

  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  markAsTouched(): void {
    if(!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  changeValue(newValue: string): void {
    this.value = newValue;

    this.markAsTouched();
    this.onChange(this.value);

    this.errorMessage = this.getErrorMessage(this.control.errors);

    this.cdr.markForCheck();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  private getErrorMessage(errors: ValidationErrors | null): string {
    if (errors?.['required']) {
      return 'This field is required';
    }

    if (errors?.['minlength']) {
      return `Minimum length is ${errors['minlength'].requiredLength}.`;
    }

    if (errors?.['maxlength']) {
      return `Maximum length is ${errors['maxlength'].requiredLength}.`;
    }

    return '';
  }
}
