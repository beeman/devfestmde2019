import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/sdk';

@Component({
  template: `
    <app-page>
      <ng-container *ngIf="profile$ | async as profile; else loading">
        <div class="card mb-5">
          <div class="card-body" *ngIf="profile">
            <app-post-author [author]="profile"
                             [title]="profile.location"
                             [text]="profile.bio">
            </app-post-author>
          </div>
        </div>
      </ng-container>
      <ng-template #loading>
        <app-loading [loading]="true"></app-loading>
      </ng-template>
    </app-page>
  `,
})
export class ProfileDetailComponent implements OnInit {
  public profile$: Observable<Profile>;

  constructor(private route: ActivatedRoute, private service: ProfileService) {}

  ngOnInit() {
    this.profile$ = this.route.params.pipe(
      map(params => params.username),
      switchMap(username => this.service.profile(username)),
    );
  }
}
