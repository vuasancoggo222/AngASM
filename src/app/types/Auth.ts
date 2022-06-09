export type TypeLoginRequest = {
    email: string,
    password: string
  };
  
  export type TypeLoginResponse = {
    token: string,
    user: {
      id: number,
      email: string
    }
  };