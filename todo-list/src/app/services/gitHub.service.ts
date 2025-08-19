import { inject, Injectable } from '@angular/core';
import { GitHubUser } from '../types/gitHub/GitHubUser';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../shared/consts/urls/Endpoints';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getUserByLogin(login: string): Observable<GitHubUser> {
    const requestUrl = Endpoints.gitHubEndpoints.getUser(login);

    return this.httpClient.get<GitHubUser>(requestUrl).pipe(map(response => {
      return {
        id: response.id,
        login: response.login,
        avatar_url: response.avatar_url
      } as GitHubUser
    }));
  }
}
