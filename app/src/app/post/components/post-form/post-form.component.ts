import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WebFormHelper } from 'src/app/ui';
import { User } from 'src/sdk';
import { PostActions } from '../../actions/post.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  template: `
    <div class="card" *ngIf="author">
      <div class="card-body">
        <div class="media">
          <img [attr.src]="author.avatar" class="avatar mr-3" [attr.alt]="author.name">
          <div class="media-body">
            <ng-container *ngIf="fields.length">
              <div>
                <web-form #formEl [form]="form" [model]="model" [fields]="fields" (action)="submit()">
                </web-form>
              </div>
              <div class="text-right mt-3">
                <button disabled="true" class="btn ">
                  {{ textCount }} / {{ textCountMax }}
                </button>
                <button [disabled]="!form.valid" (click)="formEl.submit()" class="btn btn-success">
                  {{ label }}
                </button>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </div>

  `,
  styles: [
    `
      .avatar {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 1px solid #2B3E50;
      }
      ::ng-deep textarea.form-control {
        background-color: #4E5D6C!important;
        color: #EBEBEB!important;
        border: 1px solid #2B3E50!important;
      }
    `
  ]
})
export class PostFormComponent implements OnInit {
  @Input() refresh$: Observable<boolean>;
  @Input() textCountMax = 280;
  @Input() label = 'Post!';
  @Input() author: User;
  @Input() form = new FormGroup({});
  @Input() model = {
    text: null
  };
  @Input() fields: WebFormHelper[] = [
    WebFormHelper.textarea('text', {
      placeholder: 'Write your post...',
      required: true,
      minLength: 1,
      maxLength: this.textCountMax,
      rows: 4,
    }),
  ];
  @Output() action = new EventEmitter();

  get textCount() {
    return this.model.text ? this.model.text.length : 0;
  }
  ngOnInit() {
    this.refresh$.subscribe((val) => {
      this.model = { text: null };
      this.form.enable();
      this.form.reset();
      console.log('refresh', val);
    });
  }

  submit() {
    this.form.disable();
    return this.action.emit({ type: PostActions.SUBMIT_POST, payload: this.model });
  }
}
