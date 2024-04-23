import { create } from 'zustand';

// 초기 상태를
const initialRecruitPost = {
  userId: 0,
  place: '',
  address: '',
  participantTotal: 1,
  contents: null,
  foodTypeTag: '',
  ageTag: '',
  genderTag: '',
  meetAt: '',
  closeAt: '',
};

const useRecruitStore = create((set) => ({
  recruitPost: initialRecruitPost,
  setRecruitPost: (newData) => set({ recruitPost: newData }),
}));

export { initialRecruitPost };
export default useRecruitStore;
