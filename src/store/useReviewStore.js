import { create } from 'zustand';

const useReviewStore = create((set) => ({
  reviewData: {
    postId: 0,
    userId: 0,
    participation: true,
    punctuality: null,
    sociability: null,
    manner: null,
    reply: null,
  },
  showReviewForm: false,
  participants: [],
  selectedParticipant: {},
  setReviewData: (updateFunction) =>
    set((state) => ({ reviewData: updateFunction(state.reviewData) })),
  setShowReviewForm: (value) => set({ showReviewForm: value }),
  setParticipants: (value) => set({ participants: value }),
  setSelectedParticipant: (value) => set({ selectedParticipant: value }),
}));

export default useReviewStore;
