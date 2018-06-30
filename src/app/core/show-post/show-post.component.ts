import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'shared/services/post.service';
import { Post } from 'shared/models/post';
import { Comment } from 'shared/models/comment';
import { CommentService } from 'shared/services/comment.service';
import ObjectId from 'bson-objectid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  form: FormGroup;
  post: Post;
  comments: Comment[];
  commentsNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          return this.postService.getOneById(params.get('_id'));
        })
      )
      .subscribe(post => {
        this.post = post as Post;
        const condition = { parent_post: this.post._id };
        this.commentService.getAllByCondition(condition)
          .subscribe(comments => {
            this.comments = comments as Comment[];
          }, error => {
            this.commentsNotFound = true;
          });
      });

    this.form = this.fb.group({
      content: [null, [Validators.minLength(5), Validators.required]]
    });
  }

  newComment(values) {
    console.log(values);
    const comment: Comment = {
      parent_post: this.post._id,
      content: values['content']
    };
    this.commentService.createPostComment(comment)
      .subscribe(created_comment => {
        this.form.get('content').setValue('');
        const condition = { parent_post: this.post._id };
        this.commentService.getAllByCondition(condition)
          .subscribe(comments => {
            this.comments = comments as Comment[];
          }, error => {
            console.log(error);
            this.commentsNotFound = true;
          });
      });
  }

  get posted_at() {
    if (!this.post) {
      return;
    }
    return new ObjectId(this.post._id).getTimestamp();
  }
}

