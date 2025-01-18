import { create } from "zustand";
import { UserState } from "../types";

const useStore = create<UserState>((set) => ({
  isLogin: true,
  darkmode: false,
  toggleLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
}));

export default useStore;
