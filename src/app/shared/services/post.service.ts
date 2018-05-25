import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super(`http://localhost:5000/api/posts`, http);
  }

}
