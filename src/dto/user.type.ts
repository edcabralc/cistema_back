export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  recoverypasswordToken: string;
  role: string;
  reserve: [{ reserveId: string }];
};
