import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from 'shared/models/comment';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from 'shared/common/not-found-error';
import { throwError } from 'rxjs';
import { AppError } from 'shared/common/app-error';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://localhost:9001/api/comments';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(private http: HttpClient) { }

  createPostComment(comment: Comment) {
    return this.http.post(`${this.url}`, comment, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  createSubComment(comment: Comment) {
    return this.http.post(`${this.url}/sub`, comment, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(_id) {
    return this.http.delete(`${this.url}/${_id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(_id, values: {content: string}) {
    return this.http.put(`${this.url}/${_id}`, values, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(_id) {
    return this.http.get(`${this.url}/${_id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAll() {
    return this.http.get(`${this.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllByCondition(condition) {
    return this.http.post(`${this.url}/condition`, condition)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}
