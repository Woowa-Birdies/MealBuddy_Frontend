import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoadingStore;
