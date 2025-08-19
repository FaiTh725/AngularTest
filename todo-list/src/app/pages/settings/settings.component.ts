import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { TodoSearchComponent } from "../../shared/inputs/todo-search/todo-search.component";
import { GitHubService } from '../../services/gitHub.service';
import { GitHubUser } from '../../types/gitHub/GitHubUser';
import { GithubProfileComponent } from "../../components/github-profile/github-profile.component";
import { SwitchThemeComponent } from "../../components/switch-theme/switch-theme.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TodoSearchComponent, GithubProfileComponent, SwitchThemeComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  searchedGitHubUser: GitHubUser | null = null;
  searchText: string = '';

  private readonly gitHubService: GitHubService = inject(GitHubService);
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  search(searchValue: string): void {
    if(!searchValue) {
      return;
    }
    
    this.gitHubService.getUserByLogin(searchValue)
    .subscribe({
      next: gitHubUser => {
        this.searchedGitHubUser = gitHubUser;
        this.cdr.markForCheck();
      },
      error: () => {
        this.searchedGitHubUser = null;
      }
    });
    
    this.searchText = searchValue;
  }
}
