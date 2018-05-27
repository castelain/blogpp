import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'keyword': ['', Validators.required]
    });
  }

}
