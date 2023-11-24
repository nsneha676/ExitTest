import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { LoginComponent } from './login/login.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',
  component: LoginComponent,
  pathMatch:'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'Play-Ground',
    component: PlayGroundComponent,
    pathMatch: 'full'
  },
  {
    path: 'Followers',
    component: FollowersComponent,
    pathMatch: 'full'
  },
  {
    path: 'Following',
    component: FollowingComponent,
    pathMatch: 'full'
  },
  {
    path: 'Search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
