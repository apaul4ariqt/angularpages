import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const gitStats = `
<div>
  <h2>Git Stats for iarunpaul</h2>
  <ul>
    <li>Commits: 42</li>
    <li>Pull Requests: 15</li>
    <li>Issues: 8</li>
  </ul>
</div>
`;

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  getGitStats(username: string): Observable<string> {

    return of(gitStats);
  }

}
