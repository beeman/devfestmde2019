import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="text-center py-5" *ngIf="loading">
      <i class="fa fa-4x fa-spinner fa-spin"></i>
    </div>  `,
  styles: []
})
export class LoadingComponent {
  @Input() loading = false;
}
