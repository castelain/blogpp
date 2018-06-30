import { UserService } from 'shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from 'shared/password.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      confirm: this.fb.group({
        'password1': ['', [Validators.required, Validators.minLength(5)]],
        'password2': ['', [Validators.required]]
      }, {
        validator: PasswordValidators.passwordsShouldMatch
      }),
      bio: ['', []]
    });
  }

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get confirm() {
    return this.form.get('confirm');
  }

  signUp(values) {
    console.log(values);
    values = {
      email: values.email,
      name: values.name,
      password: values.confirm.password1,
      bio: values.bio
    };
    this.userService.create(values)
      .subscribe(newUser => {
        console.log(newUser);
        this.router.navigate(['/signin']);
      });
  }

}
