export type TUser = {
    _id: string;
    name?: string;
    email: string;
    photoURL: string
    password: string;
    role: 'admin' | 'user'
    phone: string;
    address: string;
    city: string;
    isBlocked: boolean,
  }