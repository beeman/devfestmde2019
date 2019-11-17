import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WebAuthService } from 'src/app/auth';
import { User } from 'src/sdk';

@Component({
  template: `
    <app-header [user]="user$ | async"></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppLayoutComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private auth: WebAuthService) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
  }

}
