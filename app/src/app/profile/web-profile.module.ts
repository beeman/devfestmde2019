import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebUiModule } from 'src/app/ui';
import { WebPostModule } from '../post';

import { ProfileService } from './services/profile.service';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';

const routes: Routes = [{ path: ':username', component: ProfileDetailComponent }];

@NgModule({
  imports: [WebUiModule, RouterModule.forChild(routes), WebPostModule],
  providers: [ProfileService],
  declarations: [ProfileDetailComponent],
})
export class WebProfileModule {}
