import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from 'shared/common/bad-input';
import { AppError } from 'shared/common/app-error';
import { DataService } from 'shared/services/data.service';

@Injectable()
export class UserService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:9001/api/users', http);
  }

}
