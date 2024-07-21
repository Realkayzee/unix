import { create } from "zustand";

interface State {
  baseToken: any;
  setBaseToken: (value: any) => void;
  quoteToken: any;
  setQuoteToken: (value: any) => void;
  nftSelected: any;
  setNftSelected: (value: any) => void;
}

const useStore = create<State>((set) => ({
  baseToken: null,
  setBaseToken: (value) => set({ baseToken: value }),
  quoteToken: null,
  setQuoteToken: (value) => set({ quoteToken: value }),
  nftSelected: null,
  setNftSelected: (value) => set({ nftSelected: value }),
}));

export default useStore;
