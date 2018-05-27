import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { DataService } from 'shared/services/data.service';
import { PostService } from 'shared/services/post.service';

import { SummaryPipe } from './pipes/summary.pipe';
import { AuthGuard } from './services/auth.guard';
import { UserService } from './services/user.service';

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
    UserService
  ]
})
export class SharedModule { }
