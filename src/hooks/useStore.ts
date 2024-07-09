import { create } from "zustand";

interface State {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
}

const useStore = create<State>((set) => ({
  isConnected: false,
  setIsConnected: (value) =>
    set((state) => {
      if (state.isConnected !== value) {
        // Only update if value has changed
        return { ...state, isConnected: value };
      }
      return state;
    }),
}));

export default useStore;
