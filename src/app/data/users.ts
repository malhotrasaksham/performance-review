import { Role, User } from '../models/user.model';

export const users: User[] = [
  {
    id: 'e8dbf31d-9b1d-4f86-b323-07f562f433fa',
    login: 'rob',
    name: 'Rob Feeney',
    role: Role.user,
  },
  {
    id: '9b12ecba-cc5f-45f5-881a-f6e340729fca',
    login: 'john',
    name: 'John Norris',
    role: Role.user,
  },
  {
    id: '0ee59ac5-fc42-4d12-adb8-83c584a940be',
    login: 'tim',
    name: 'Tim Clooney',
    role: Role.user,
  },
  {
    id: '74a145da-b2ff-45f2-9790-ae84d7e34d39',
    login: 'josh',
    name: 'Josh Pasto',
    role: Role.user,
  },
  {
    id: 'b86a80b1-f531-4c3a-a7f9-eab3217b490c',
    login: 'ryan',
    name: 'Ryan Malik',
    role: Role.user,
  },
  {
    id: '97138cb8-41a3-4101-92b4-48db50d852ea',
    login: 'admin',
    name: 'Admin',
    role: Role.admin,
  },
];
