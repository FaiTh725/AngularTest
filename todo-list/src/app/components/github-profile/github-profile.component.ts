import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GitHubUser } from '../../types/gitHub/GitHubUser';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-github-profile',
  imports: [NgStyle],
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubProfileComponent {
  @Input() gitHubUser!: GitHubUser;

 }
