import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NewPostComponent } from './core/new-post/new-post.component';
import { ShowPostComponent } from './core/show-post/show-post.component';
import { SignupComponent } from './core/signup/signup.component';
import { SigninComponent } from './core/signin/signin.component';
import { EditPostComponent } from './core/edit-post/edit-post.component';
import { UpdatePostComponent } from './core/update-post/update-post.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-post/:_id',
    component: UpdatePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'show-post/:_id',
    component: ShowPostComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
