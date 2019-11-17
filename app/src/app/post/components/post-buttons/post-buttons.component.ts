import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-buttons',
  template: `
    <div class="row">
      <div class="col-4 text-center" *ngFor="let button of buttons">
        <button type="button" class="btn" (click)="action.emit(button.action)" *ngIf="button.action">
          <i class="mr-2 {{ button.icon }}"></i>
          {{ button.count }}
        </button>
      </div>
    </div>
  `,
})
export class PostButtonsComponent {
  @Input() buttons: { action: string; count: number; icon: string }[] = [];
  @Output() action = new EventEmitter();
}
