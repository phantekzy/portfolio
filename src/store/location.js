/* Import section */
import { Immer } from "zustand/middleware";
import { create } from "zustand";
import { locations } from "../constants";

/* Default location */
const DEFAULT_LOCATION = locations.work;

/* Location store */
export const useLocationStore = create(
  Immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);
