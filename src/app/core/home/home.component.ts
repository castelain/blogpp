import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'shared/models/post';
import { Comment } from 'shared/models/comment';
import { PostService } from 'shared/services/post.service';
import { CommentService } from 'shared/services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  comments: Comment[];

  constructor(
    public authService: AuthService,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(posts => {
        this.posts = posts as Post[];
      });
    this.commentService.getAll()
      .subscribe(comments => {
        this.comments = comments as Comment[];
      });
  }

}
