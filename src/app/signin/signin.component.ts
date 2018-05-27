import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  signIn(account) {
    account = _.pick(account, ['email', 'password']);
    this.authService.login(account)
      .subscribe(async result => {
        console.log(result);
        if (result) {
          await this.router.navigate(['/']);
        } else {
          this.form.setErrors({ invalidEmailOrPassword: true });
        }
      });
  }

}
