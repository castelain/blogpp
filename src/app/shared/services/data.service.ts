import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import _ from 'lodash';

@Injectable()
export class DataService {
  private httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
    })
  };

  constructor(
    private url: string,
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.url)
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

  getOneById(id) {
    return this.http.get(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource) {
    return this.http.post(this.url, resource, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.put(`${this.url}/${resource.id}`, _.omit(resource, ['_id', 'id']), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }

    return throwError(new AppError(error));
  }
}
