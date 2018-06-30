import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Comment } from 'shared/models/comment';
import ObjectId from 'bson-objectid';
import { CommentService } from 'shared/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  get posted_at() {
    return new ObjectId(this.comment._id).getTimestamp();
  }

  deleteComment(_id) {
    this.commentService.delete(_id)
      .subscribe(deletedComment => {
        console.log(deletedComment);
      });
  }

}
