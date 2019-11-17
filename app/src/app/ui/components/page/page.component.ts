import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PageComponent {}
