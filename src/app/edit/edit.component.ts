import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'shared/services/post.service';
import { Post } from 'models/post';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  isNew = true;
  post: Post = {
    title: '',
    content: '',
    author: {},
    _id: ''
  };

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required]]
    });

    this.route.queryParamMap
      .pipe(
        switchMap(params => {
          const _id = params.get('_id');
          if (_id) {
            this.isNew = false;
            return this.postService.getOneById(_id);
          } else {
            return [];
          }
        })
      )
      .subscribe(post => {
        if (post) {
          this.post = post as Post;
          this.form.get('title').setValue(this.post.title);
          this.form.get('content').setValue(this.post.content);
        }
      });

    // this.route.queryParamMap
    //   .subscribe(params => {
    //     this.postService.getOneById(params.get('id'))
    //       .subscribe(post => {
    //         this.post = post as Post;

    //         this.form.get('title').setValue(this.post.title);
    //         this.form.get('content').setValue(this.post.content);

    //       });
    //   });
  }

  createPost(value) {
    this.postService.create(value)
      .subscribe(async createdPost => {
        console.log(createdPost);
        if (createdPost) {
          await this.router.navigate([`/show-post/${createdPost['_id']}`]);
        }
      });
  }

  updatePost(value) {
    value['id'] = this.post._id;

    this.postService.update(value)
      .subscribe(async updatedPost => {
        console.log(updatedPost);
        if (updatedPost) {
          await this.router.navigate([`/show-post/${updatedPost['_id']}`]);
        }
      });
  }

}
