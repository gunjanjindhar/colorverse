import { create } from 'zustand';

interface GradingSession {
  id: string;
  videoUrl: string;
  status: 'ready' | 'processing' | 'complete';
}

interface GradingStore {
  gradingSession: GradingSession | null;
  setGradingSession: (session: GradingSession) => void;
}

export const useGradingStore = create<GradingStore>((set) => ({
  gradingSession: null,
  setGradingSession: (session) => set({ gradingSession: session }),
}));