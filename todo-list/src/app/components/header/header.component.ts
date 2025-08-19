import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

export interface RouteNavigation {
  name: string,
  route: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterOutlet, RouterLink, RouterLinkActive],
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

  private readonly router: Router = inject(Router);

  isSelectedPage(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
