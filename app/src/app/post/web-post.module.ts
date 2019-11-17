import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { WebUiModule } from 'src/app/ui';

import { PostIndexComponent } from './containers/post-index/post-index.component';
import { PostComponent } from './components/post/post.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostService } from './services/post.service';
import { PostAuthorComponent } from './components/post-author/post-author.component';
import { PostButtonsComponent } from './components/post-buttons/post-buttons.component';

const routes: Routes = [{ path: '', component: PostIndexComponent }];

@NgModule({
  imports: [WebUiModule, RouterModule.forChild(routes), ModalModule.forRoot()],
  providers: [BsModalService, PostService],
  declarations: [
    PostIndexComponent,
    PostComponent,
    PostCommentsComponent,
    PostFormComponent,
    PostAuthorComponent,
    PostButtonsComponent,
  ],
  exports: [PostAuthorComponent],
  entryComponents: [PostCommentsComponent],
})
export class WebPostModule {}
