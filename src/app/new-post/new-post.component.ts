import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'shared/services/post.service';
import { Post } from 'models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  form: FormGroup;
  post: Post = {
    title: '',
    content: '',
    author: {},
    _id: ''
  };

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': [this.post.title, [Validators.required]],
      'content': [this.post.content, [Validators.required]]
    });

  }

  newPost(value) {
    this.postService.create(value)
      .subscribe(async createdPost => {
        console.log(createdPost);
        if (createdPost) {
          await this.router.navigate([`/post/${createdPost['_id']}`]);
        }
      });
  }

}
