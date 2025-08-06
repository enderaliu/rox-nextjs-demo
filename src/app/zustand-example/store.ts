import { create } from 'zustand';

type BearState = {
  count: number;
  increase: () => void;
};

export const useBearStore = create<BearState>((set) => ({
  count: 0,
  increase: () =>
    set((state: BearState) => ({
      count: state.count + 1,
    })),
}));
