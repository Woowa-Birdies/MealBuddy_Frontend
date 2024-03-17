import { create } from 'zustand';

const useSampleStore = create((set) => ({
  samples: [],
  sampleId: 1,
  setSamples: (samples) => set({ samples }),
  clearSamples: () => set({ samples: [] }),
  incrementSampleId: () => set((state) => ({ sampleId: state.sampleId + 1 })),
}));

export default useSampleStore;
