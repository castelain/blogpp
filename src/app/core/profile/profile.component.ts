import { AuthService } from 'shared/services/auth.service';
import { PostService } from 'shared/services/post.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Post } from 'shared/models/post';
import { Comment } from 'shared/models/comment';
import { NotFoundError } from 'shared/common/not-found-error';
import { User } from 'shared/models/user';
import { CommentService } from 'shared/services/comment.service';
import ObjectId from 'bson-objectid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges {
  posts: Post[];
  comments: Comment[];
  postsNotFound = false;
  commentsNotFound = false;
  @Input() user: User;
  isOwner = false;

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  ngOnChanges() {
    if (!this.user) {
      return;
    }
    this.isOwner = this.user._id === this.authService.currentUser._id;

    const condition = { author: this.user._id };
    this.postService.getAllByCondition(condition)
      .subscribe(posts => {
        this.posts = posts as Post[];
      }, error => {
        if (error instanceof NotFoundError) {
          this.postsNotFound = true;
        }
      });
    this.commentService.getAllByCondition(condition)
      .subscribe(comments => {
        this.comments = comments as Comment[];
      }, error => {
        if (error instanceof NotFoundError) {
          this.commentsNotFound = true;
        }
      });
  }

  get member_since() {
    if (!this.user) {
      return null;
    }
    return new ObjectId(this.user._id).getTimestamp();
  }

}
