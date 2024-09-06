export interface AuthState {
  isLoading: boolean;
  authInfo: IAuthInfo;
//   userInfo: IUserInfo;
}

interface IAuthInfo {
  phone: string | null;
}
// interface IUserInfo {}
