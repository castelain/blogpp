import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CoreComponent } from './core.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';

const coreRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
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
        path: 'show-profile/:_id',
        component: ShowProfileComponent
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
    ]
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreRoutingModule { }
