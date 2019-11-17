import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { WebUiModule } from './ui/';

import { AppLayoutComponent } from './core/containers/app-layout/app-layout.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';
import { NotFoundComponent } from './core/containers/not-found/not-found.component';
import { AppComponent } from './app.component';
import { AppGraphQLModule } from './app.graphql.module';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'posts', },
      {
        path: 'posts',
        loadChildren: () =>
          import('./post/web-post.module').then(m => m.WebPostModule)
      },
      {
        path: 'profiles',
        loadChildren: () =>
          import('./profile/web-profile.module').then(m => m.WebProfileModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('./auth/web-auth.module').then(m => m.WebAuthModule)
      },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    WebUiModule,
    AppGraphQLModule,
  ],
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
