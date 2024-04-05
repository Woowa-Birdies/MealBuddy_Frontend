import { create } from 'zustand';

const useRecruitStore = create((set) => ({
  recruitPost: {
    foodType: '',
    place: '',
    address: '',
    participantTotal: 1,
    gender: '',
    ageRange: '',
    postStatus: '모집중',
    meetAt: '',
    closeAt: '',
    createAt: '',
    detail: [],
  },
  setRecruitPost: (newData) => set({ recruitPost: newData }),
}));

export default useRecruitStore;
