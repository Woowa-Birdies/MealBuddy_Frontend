import { create } from 'zustand';

const now = 2;

const useVerificationStore = create((set) => ({
  userData: {
    userId: now,
    nickname: '',
    verificationHash: '',
    registerNumber: '',
    email: '',
  },
  setUserData: (key, value) =>
    set((state) => ({
      userData: { ...state.userData, [key]: value },
    })),
}));

export default useVerificationStore;
