export interface User {
  id: string;
  username: string;
  token: string;
  image: string;
}

export interface UserFormValues {
  email: string;
  password: string;
  username?: string;
}
