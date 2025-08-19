import { inject, Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly localStorageService: LocalStorageService = inject(LocalStorageService);

  constructor() {
    this.setThemeOnLoad();
  }

  setTheme(theme: 'light' | 'black') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  setThemeOnLoad(): void {
    const theme = this.localStorageService.getItem<'light' | 'black'>('theme');
    
    if(theme) {
      this.setTheme(theme);
    } else {
      this.setTheme('light');
    }
  }

  getTheme(): 'light' | 'black'{
    return this.localStorageService.getItem<'light' | 'black'>('theme') ?? 'light';
  }
}
