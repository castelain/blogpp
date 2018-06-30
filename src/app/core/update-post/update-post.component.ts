import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'shared/models/post';
import { PostService } from 'shared/services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.postService.getOneById(params.get('_id'))
          .subscribe(post => {
            this.post = post as Post;
          });
      });
  }

}
