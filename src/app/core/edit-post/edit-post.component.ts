import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'shared/models/post';
import { PostService } from 'shared/services/post.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() post: Post;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  ngOnChanges() {
    if (this.form) {
      this.form.get('title').setValue(this.post.title);
      this.form.get('content').setValue(this.post.content);
    }
  }

  createPost(values) {
    console.log(values);
    this.postService.create(values)
      .subscribe(async (created_post: Post) => {
        await this.router.navigate(['/show-post', created_post._id]);
      });
  }

  updatePost(values) {
    values['_id'] = this.post._id;
    console.log(values);
  }

}
