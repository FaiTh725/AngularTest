import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet]
})
export class App implements OnInit {
  protected readonly title = signal('todo-list');
  
  private readonly themeService: ThemeService = inject(ThemeService);
  
  ngOnInit(): void {
    this.themeService.setThemeOnLoad();
  }
}
