import { Injectable } from '@angular/core';
import { GraphQLService, Profile } from 'src/sdk';
import { map } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap';

import { WebAuthService } from 'src/app/auth';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private auth: WebAuthService, private graphql: GraphQLService, private modalService: BsModalService) {}

  profiles() {
    return this.graphql.profiles().pipe(map(result => result.data.profiles as Profile[]));
  }

  profile(username: string) {
    return this.graphql.profile(username).pipe(map(result => result.data.profile as Profile));
  }
}
