import { create } from 'zustand';

const useModalWarningStore = create((set) => ({
  content: '',
  setContent: (content) => set({ content }),
  isWarningOpen: false,
  setIsWarningOpen: (isWarningOpen) => set({ isWarningOpen }),
  onOk: () => {},
  setOnOk: (onOk) => set({ onOk }),
}));

export default useModalWarningStore;
