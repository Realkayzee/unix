import { create } from "zustand";

interface State {
  baseToken: any;
  setBaseToken: (value: any) => void;
  quoteToken: any;
  setQuoteToken: (value: any) => void;
}

const useStore = create<State>((set) => ({
  baseToken: null,
  setBaseToken: (value) => set({ baseToken: value }),
  quoteToken: null,
  setQuoteToken: (value) => set({ quoteToken: value })
}));

export default useStore;
