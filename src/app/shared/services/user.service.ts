import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private url = 'http://localhost:9001/api/users';

  constructor(private http: HttpClient) { }

  register(values) {
    return this.http.post(this.url, values);
  }
}
