import { AuthGuard } from './shared/services/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ShowPostComponent } from './show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    FooterComponent,
    EditComponent,
    PostComponent,
    NewPostComponent,
    ShowPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
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
        path: 'edit',
        component: EditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-post',
        component: NewPostComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'show-post/:_id',
        component: ShowPostComponent
      }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
