import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'shared/services/post.service';
import { Post } from 'models/post';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  post = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          return this.postService.getOneById(params.get('_id'));
        })
      )
      .subscribe(post => {
        this.post = post;
      });

    // this.route.paramMap
    //   .subscribe(params => {
    //     this.postService.getOneById(params.get('id'))
    //       .subscribe(post => {
    //         this.post = (post as Post);
    //       });
    //   });
  }
}

