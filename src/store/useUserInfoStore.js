import { create } from 'zustand';

const defaultUserInfo = {
  userId: 0,
  nickName: '',
  introduce: '',
};

const useUserInfoStore = create((set) => ({
  userId: 0,
  setUserId: (userId) => set({ userId }),
  userProfile: defaultUserInfo,
  setUserProfile: (userProfile) => set({ userProfile }),
}));

export default useUserInfoStore;
