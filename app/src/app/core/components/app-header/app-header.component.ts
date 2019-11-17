import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';
import { User } from 'src/sdk';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fdixed-top bg-dark">
        <a class="navbar-brand" routerLink="/">
          <img src="/assets/logo.png" alt="Logo" class="logo">
          {{ title }}
        </a>
        <button class="navbar-toggler" type="button"
                (click)="toggleNavBar()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  [ngClass]="{ 'show': navBarOpen }">
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item"
              *ngFor="let link of topLinks"
              routerLinkActive="active"
            >
              <a class="nav-link" [routerLink]="link.path">
                <i class="{{ link.icon }} mr-1" *ngIf="link.icon"></i>
                {{ link.label }}
              </a>
            </li>
          </ul>

          <div class="btn-group" dropdown placement="bottom right">
            <button id="button-basic" dropdownToggle type="button" class="btn btn-default dropdown-toggle"
                    aria-controls="dropdown-basic">
              <ng-container *ngIf="user">
                <img [attr.src]="user.avatar" [attr.alt]="user.name" class="avatar">
              </ng-container>
              <ng-container *ngIf="!user">
                <i class="fa fa-user"></i>
              </ng-container>
              <span class="caret"></span>
            </button>
            <ul id="dropdown-basic" *dropdownMenu
                class="dropdown-menu dropdown-menu-right"
                role="menu" aria-labelledby="button-basic">
              <ng-container *ngIf="!user">
                <li role="menuitem">
                  <a class="dropdown-item" [routerLink]="loginLink.path">
                    <i class="{{ loginLink.icon }} mr-1" *ngIf="loginLink.icon"></i>
                    {{ loginLink.label }}
                  </a>
                </li>
              </ng-container>
              <ng-container *ngIf="user">
                <ng-container  *ngFor="let link of profileLinks">
                  <li class="divider dropdown-divider" *ngIf="link.divider"></li>
                  <li role="menuitem" *ngIf="!link.divider">
                    <a class="dropdown-item" [routerLink]="link.path">
                      <i class="{{ link.icon }} mr-1" *ngIf="link.icon"></i>
                      {{ link.label }}
                    </a>
                  </li>
                </ng-container>
              </ng-container>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      .logo {
        height: 28px;
      }
      .avatar {
        height: 28px;
        border-radius: 50%;
      }
    `
  ],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppHeaderComponent implements OnInit {
  @Input() user: User;

  title = 'GraphQL with Angular';
  topLinks = [
    { path: '/posts', label: 'Posts', icon: 'fa fa-home' },
    // { path: '/profiles', label: 'Profiles', icon: 'fa fa-users' }
  ];
  profileLinks = [
    { divider: false, path: '/profile', label: 'Profile', icon: 'fa fa-user' },
    { divider: true },
    { divider: false, path: '/logout', label: 'Log out', icon: 'fa fa-sign-out' }
  ];
  loginLink = { divider: false, path: '/login', label: 'Log in', icon: 'fa fa-sign-in' };

  navBarOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }
}
