import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebFormHelper } from 'src/app/ui';
import { WebAuthService } from '../../services/web-auth.service';
import { filter, map } from 'rxjs/operators';

@Component({
  template: `
    <auth-page
      [form]="form"
      [fields]="fields"
      label="Log in"
      (action)="handleAction($event)"
    ></auth-page>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  fields: WebFormHelper[] = [
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
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: WebAuthService,
    // private toastr: NbToastrService,
  ) {}

  ngOnInit() {
    // this.auth.setMessage(null);
    this.route.queryParams
      .pipe(
        map(params => params['token']),
        filter(token => !!token),
        // tap(token => this.auth.storeToken(token)),
      )
      .subscribe(() => this.router.navigate(['/']));
  }

  async handleAction({ payload }) {
    this.form.disable();
    return this.auth
      .login(payload)
      .subscribe(
        res => {
          console.log('YAY USER LOGGED IN', res);
          return this.router.navigate(['/']);
        },
        err => {
          this.form.enable();
        })
  }
}
