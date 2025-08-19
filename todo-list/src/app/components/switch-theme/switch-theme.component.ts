import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TodoDropdownComponent } from "../../shared/inputs/todo-dropdown/todo-dropdown.component";
import { ThemeService } from '../../services/theme.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [TodoDropdownComponent],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchThemeComponent implements OnInit {
  themes: string[] = [
    'Light theme',
    'Black theme'
  ];
  selectedIndexTheme: number = 0;

  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly localStorageService: LocalStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    var theme = this.themeService.getTheme();

    this.selectedIndexTheme = theme === 'light' ? 0 : 1;
  }

  switchTheme(themeIndex: number): void {
    const theme = themeIndex === 0 ? 'light' : 'black';
  
    this.themeService.setTheme(theme);
    this.localStorageService.setValue('theme', theme);
  }
}
