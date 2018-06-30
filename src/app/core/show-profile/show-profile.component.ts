import { Component, OnInit } from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'shared/models/user';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.userService.getOneById(params.get('_id'))
          .subscribe(user => {
            this.user = user as User;
          });
      });
  }

}
