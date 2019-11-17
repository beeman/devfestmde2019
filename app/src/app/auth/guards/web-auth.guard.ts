import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { WebAuthService } from '../services/web-auth.service';

@Injectable({ providedIn: 'root' })
export class WebAuthGuard implements CanActivate {

  constructor(private service: WebAuthService, private router: Router) {}

  canActivate() {
    if (this.service.user) {
      return true;
    }
    this.router.navigate(['/login']);
  }

}
