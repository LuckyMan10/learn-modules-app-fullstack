export type card = {
  title: string;
  termin: string;
  id: string;
  image: string;
};

export type registrationData = {
  username: string;
  email: string;
  password: string;
};

export type loginData = Omit<registrationData, 'username'>;

export type updateAccountInfoData = {
  successfulTests?: number;
  failedTests?: number;
};

export type moduleData = {
  name: string;
  description: string;
  id: string;
  cards: Array<card>;
};
