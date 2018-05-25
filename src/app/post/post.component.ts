import { Post } from 'models/post';
import { PostService } from './../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post = {
    title: '',
    content: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //     this.postService.getOneById(params.get('id'))
    //       .subscribe(post => {
    //         this.post = (post as Post);
    //       });
    //   });
    console.log(this.post);
  }

}
