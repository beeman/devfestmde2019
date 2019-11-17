import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WebFormHelper } from 'src/app/ui';
import { Router } from '@angular/router';
import { WebAuthService } from '../../services/web-auth.service';

@Component({
  template: `
    <auth-page
      [form]="form"
      [fields]="fields"
      label="Register"
      (action)="handleAction($event)"
    ></auth-page>
  `,
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({});
  fields: WebFormHelper[] = [
    WebFormHelper.input(
      'username',
      {
        label: 'Username',
        required: true,
      },
    ),
    WebFormHelper.email(
      'email',
      {
        label: 'Email',
        required: true,
      },
    ),
    WebFormHelper.password(
      'password',
      {
        label: 'Password',
        required: true,
      },
    ),
    WebFormHelper.input(
      'name',
      {
        label: 'Name',
        required: true,
      },
    ),
  ];

  constructor(private router: Router, public auth: WebAuthService) {}

  ngOnInit() {
  }

  async handleAction({ type, payload }) {
    this.form.disable();
    return this.auth
      .register(payload)
      .subscribe(
        res => {
          console.log('YAY USER REGISTERED', res);
          return this.router.navigate(['/']);
        },
        err => {
          console.log('error submitting form', err);
          this.form.enable();
        })
  }
}
