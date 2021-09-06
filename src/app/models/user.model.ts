enum Role {
  admin,
  user,
}

type User = {
  id: string;
  login: string;
  name: string;
  role: Role;
};

export { User, Role };
