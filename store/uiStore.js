import { create } from 'zustand';

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  terminalOpen: false,
  setSidebarOpen: (value) => set({ sidebarOpen: value }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleTerminal: () => set((state) => ({ terminalOpen: !state.terminalOpen })),
  setTerminalOpen: (value) => set({ terminalOpen: value }),
}));
