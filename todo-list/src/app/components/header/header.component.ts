import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

export interface RouteNavigation {
  name: string,
  route: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterOutlet, RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  routes: RouteNavigation[] = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Settings',
      route: '/settings'
    },
  ];

  selectedRoute: string = '/';

  route(route: string): void {
    this.selectedRoute = route;
  }
}
