import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { users } from '../data/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  error: string = '';
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login(event: Event) {
    event.preventDefault();
    const user = users.find((user) => user.login === this.username);
    if (user) {
      this.userService.$user.next(user);
    } else {
      this.error = 'Cannot login';
    }
  }
}
