import { create } from 'zustand';

const useModalConfirmStore = create((set) => ({
  content: '',
  setContent: (content) => set({ content }),
  isConfirmOpen: false,
  setIsConfirmOpen: (isConfirmOpen) => set({ isConfirmOpen }),
  onOk: () => {},
  setOnOk: (onOk) => set({ onOk }),
  onCancel: () => {},
  setOnCancel: (onCancel) => set({ onCancel }),
}));

export default useModalConfirmStore;
