import { create } from "zustand";

export const menuStorage = create<menuProp>((set) => ({
  openedMenu: false,
  toggleMenu: () => set((state) => ({ openedMenu: !state.openedMenu })),
  closeMenu: () => set({ openedMenu: false }),
}));

export const searchStorage = create<searchProp>((set) => ({
  searchInput: false,
  toggleSearchInput: () =>
    set((state) => ({ searchInput: !state.searchInput })),
  outSearch: () => ({ searchInput: false }),
}));

export const cartStorage = create<cartProp>((set) => ({
  cartMenu: false,
  cartProducts: [],
  toggleCart: () => set((state) => ({ cartMenu: !state.cartMenu })),
  closeCart: () => ({ CartMenu: false }),
  setCartProducts: (products) => set({ cartProducts: products })
}));

export const headsetColorControl = create<HeadsetColorProp>((set) => ({
  headsetColor1: "#B0D6D9",
  headsetColor2: "#C4C4C4",
  setColorAquamarineContour: () => set({ headsetColor1: "#B0D6D9" }),
  setColorPurpleContour: () => set({ headsetColor1: "#C091CC" }),
  setColorWhiteContour: () => set({ headsetColor1: "#fff" }),
  setColorBlackContour: () => set({ headsetColor1: "#3a3a3a" }),
  setColorGrayPads: () => set({ headsetColor2: "#C4C4C4" }),
  setColorWhitePads: () => set({ headsetColor2: "#fff" }),
  setColorBlackPads: () => set({ headsetColor2: "#2E2E2E" }),
  setColorBrownPads: () => set({ headsetColor2: "#574C44" }),
}));

export const typingTestStorage = create<typingTestProp>((set) => ({
  activeTypingTest: false,
  activateTypingTest: () => set({ activeTypingTest: true }),
  desactivateTypingTest: () => set({ activeTypingTest: false }),

  typingTestTimer: 0,
  addSeconds: () =>
    set((state) => ({ typingTestTimer: state.typingTestTimer + 1 })),
  restartTypingTestTimer: () => set({ typingTestTimer: 0 }),

  workingTimer: false,
  activatedTimer: () => set({ workingTimer: true }),
  desactivatedTimer: () => set({ workingTimer: false }),

  textToWrite: "",
  setTextToWrite: (text) => set({ textToWrite: text }),

  lastTextWrited: "",
  updateLastTextWrited: (text) => set({ lastTextWrited: text }),

  wordPerMinute: 0,
  setWordPerMinute: (wps) => set({ wordPerMinute: wps }),

  wordPerSecond: 0,
  setWordPerSecond: (wpm) => set({ wordPerSecond: wpm }),

  writedWordsAccuracy: 0,
  setWordAccuracy: (accuracy) => set({ writedWordsAccuracy: accuracy }),

  stopTest: false,
  finishTest: () => set({ stopTest: true }),
  StartTest: () => set({ stopTest: false }),
}));
