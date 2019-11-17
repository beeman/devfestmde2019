import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebAuthService } from '../../services/web-auth.service';

@Component({
  template: `
    <auth-page label="Log out..."></auth-page>
  `,
})
export class LogoutComponent implements OnInit {

  constructor(
    private service: WebAuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service.logout()
      .subscribe(() => this.router.navigate(['/login']));
  }

}
