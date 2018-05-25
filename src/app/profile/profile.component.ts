import { AuthService } from 'shared/services/auth.service';
import { PostService } from 'shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'models/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const condtion = { author: this.authService.currentUser._id };
    this.postService.getAllByCondition(condtion)
      .subscribe(posts => {
        this.posts = posts as Post[];
      });
  }

}
