import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role, User } from '../models/user.model';
import { users } from '../data/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public $user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

  getUsers() {
    return new Promise<User[]>((resolve) => {
      resolve(users.filter((user) => user.role === Role.user));
    });
  }

  findUsersName(id: string) {
    return new Promise<string | undefined>((resolve) => {
      resolve(users.find((user) => user.id === id)?.name);
    });
  }
}
