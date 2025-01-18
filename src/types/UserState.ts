interface UserState {
  isLogin: boolean;
  darkmode: boolean;
  toggleLogin: () => void;
  toggleDarkmode: () => void;
}

export default UserState;
