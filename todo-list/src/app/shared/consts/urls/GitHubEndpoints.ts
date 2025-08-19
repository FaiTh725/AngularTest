export class GitHubEndpoints {
  private static baseUrl: string = 'https://api.github.com';

  static getUser(userLogin: string): string {
    return `${this.baseUrl}/user/${userLogin}`;
  }
}
