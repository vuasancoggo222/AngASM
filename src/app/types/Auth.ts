export type TypeLoginRequest = {
    email: string,
    password: string
  };
  export type TypeRegisterRequest = {
    name : string,
    email: string,
    password: string,
    address: string,
  };
  
  export type TypeLoginResponse = {
    token: string,
    user: {
      id: number,
      email: string
    }
  };