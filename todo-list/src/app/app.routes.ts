import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
      },
      {
        path: 'settings',
        title: 'Settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) 
      },
    ]
  }
];
