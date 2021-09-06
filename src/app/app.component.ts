import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './services/user.service';
import { Role, User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string = '';
  constructor(
    private router: Router,
    private location: Location,
    private userService: UserService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.location.path() != '' && !this.userService.$user.value) {
          this.router.navigate(['/']);
        }
      }
    });

    this.userService.$user.subscribe((currentUser: User | null) => {
      this.userName = currentUser?.name || '';
      if (currentUser?.role == Role.user) {
        this.router.navigate(['/user']);
      } else if (currentUser?.role == Role.admin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.userService.$user.next(null);
  }

  navigate() {
    const currentUser = this.userService.$user.getValue();
  }
}
