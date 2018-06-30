import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CommentComponent } from './comment/comment.component';
import { SummaryPipe } from 'shared/pipes/summary.pipe';
import { SharedModule } from 'shared/shared.module';
import { ShowProfileComponent } from './show-profile/show-profile.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    CoreComponent,
    FooterComponent,
    HomeComponent,
    EditPostComponent,
    PostComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    NewPostComponent,
    ShowPostComponent,
    UpdatePostComponent,
    ProfileComponent,
    CommentComponent,
    ShowProfileComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
