import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebUiModule } from 'src/app/ui';

import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginComponent } from './containers/login/login.component';
import { LogoutComponent } from './containers/logout/logout.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { RegisterComponent } from './containers/register/register.component';

import { WebAuthGuard } from './guards/web-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [WebAuthGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
];

@NgModule({
  imports: [WebUiModule, RouterModule.forChild(routes)],
  declarations: [AuthPageComponent, LoginComponent, RegisterComponent, ProfileComponent, LogoutComponent]
})
export class WebAuthModule {}
