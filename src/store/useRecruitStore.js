import { create } from 'zustand';

const useRecruitStore = create((set) => ({
  recruitPost: {
    useId: 0,
    place: '',
    address: '',
    participantTotal: 1,
    contents: null,
    foodTypeTag: '',
    ageTag: '',
    genderTag: '',
    meetAt: '',
    closeAt: '',
  },
  setRecruitPost: (newData) => set({ recruitPost: newData }),
}));

export default useRecruitStore;
