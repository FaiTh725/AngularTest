import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TodoEmptyBtnComponent } from "../../../../shared/buttons/todo-empty-btn/todo-empty-btn.component";

export interface RouteNavigation {
  name: string,
  route: string
}

@Component({
  selector: 'app-header-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TodoEmptyBtnComponent],
  templateUrl: './header-navigation.component.html',
  styleUrl: './header-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavigationComponent {
  isMobileOpen: boolean = false;
  
  @Input() navigations: RouteNavigation[] = [];

  openMobileModal(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobileNavigation(): void {
    this.isMobileOpen = false;
  }
}
