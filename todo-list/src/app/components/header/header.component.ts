import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { Router, RouterOutlet } from '@angular/router';
import { RouteNavigation, HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterOutlet, HeaderNavigationComponent],
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
