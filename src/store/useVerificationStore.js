import { create } from 'zustand';

const useVerificationStore = create((set) => ({
  userData: {
    userId: 0,
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
