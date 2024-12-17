export interface Plan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}

export interface User {
  email: string;
  password: string;
}