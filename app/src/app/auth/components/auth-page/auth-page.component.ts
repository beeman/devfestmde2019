import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WebAuthService } from '../../services/web-auth.service';
import { FormGroup } from '@angular/forms';
import { WebFormHelper } from 'src/app/ui';

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  links = [
    { route: '/login', title: 'Log in' },
    { route: '/register', title: 'Register' },
  ];
  name: string;

  @Input() title = 'GraphQL with Angular';
  @Input() message: string;
  @Input() label: string;
  @Output() action = new EventEmitter();

  @Input() form = new FormGroup({});
  @Input() model = {};
  @Input() fields: WebFormHelper[] = [];
  @Input() navigation = true;

  constructor(public service: WebAuthService) {}
}

