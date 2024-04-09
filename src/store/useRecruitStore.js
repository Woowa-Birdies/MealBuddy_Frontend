import { create } from 'zustand';

const useRecruitStore = create((set) => ({
  recruitPost: {
    useId: 0,
    place: '',
    latitude: 0,
    longitude: 0,
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
