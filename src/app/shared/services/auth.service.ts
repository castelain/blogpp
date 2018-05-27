import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BadInput } from 'shared/common/bad-input';
import { NotFoundError } from 'shared/common/not-found-error';
import { AppError } from 'shared/common/app-error';

@Injectable()
export class AuthService {
  private url = 'http://localhost:9001/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(credentials) {
    return this.http.post(this.url, credentials)
      .pipe(
        map(response => {
          console.log(response);
          if (response && response['token']) {
            localStorage.setItem('token', response['token']);
            return true;
          }
          return false;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }

  private handleError(error) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    return throwError(new AppError(error));
  }
}
