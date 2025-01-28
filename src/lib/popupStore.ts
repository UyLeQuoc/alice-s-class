import { create } from "zustand";

interface PopUpStore {
  isOpen: boolean;
  openPopUp: () => void;
  closePopUp: () => void;
}

export const usePopUpStore = create<PopUpStore>((set) => ({
  isOpen: false,
  openPopUp: () => set({ isOpen: true }),
  closePopUp: () => set({ isOpen: false }),
}));
