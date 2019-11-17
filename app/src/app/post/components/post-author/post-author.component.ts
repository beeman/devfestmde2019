import { Component, Input } from '@angular/core';
import { Profile } from 'src/sdk';

@Component({
  selector: 'app-post-author',
  template: `
    <div class="media">
      <img [attr.src]="author.avatar" class="avatar mr-3" [attr.alt]="author.name" />
      <div class="media-body">
        <h5 class="mt-0">
          <a [routerLink]="['/profiles', author.username]">{{ author.name }}</a>
          <small class="text-muted">
            @{{ author.username }}
            ·
            {{ title }}
          </small>
        </h5>
        {{ text }}
      </div>
    </div>
  `,
  styles: [
    `
      .avatar {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 1px solid #2b3e50;
      }
    `,
  ],
})
export class PostAuthorComponent {
  @Input() author: Profile;
  @Input() text: string;
  @Input() title: string;
}
