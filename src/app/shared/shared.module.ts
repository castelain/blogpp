import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { DataService } from 'shared/services/data.service';
import { PostService } from 'shared/services/post.service';

import { SummaryPipe } from './pipes/summary.pipe';
import { AuthGuard } from './services/auth.guard';
import { UserService } from './services/user.service';
import { CommentService } from 'shared/services/comment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SummaryPipe
  ],
  exports: [
    SummaryPipe,
  ],
  providers: [
    AuthService,
    DataService,
    PostService,
    AuthGuard,
    UserService,
    CommentService
  ]
})
export class SharedModule { }
