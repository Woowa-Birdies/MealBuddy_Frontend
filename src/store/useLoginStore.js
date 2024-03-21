import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useLoginStore;
