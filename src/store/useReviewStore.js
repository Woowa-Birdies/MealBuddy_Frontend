import { create } from 'zustand';

const useReviewStore = create((set) => ({
  showReviewForm: false,
  setShowReviewForm: (value) => set({ showReviewForm: value }),
}));

export default useReviewStore;
