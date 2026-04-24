import { create } from 'zustand';
import { getTabDefinition } from '@/store/tabRegistry';

export const useEditorStore = create((set) => ({
  tabs: [getTabDefinition('about')],
  activeTab: 'about',

  openTab: (tab) =>
    set((state) => {
      const existingTab = state.tabs.find((entry) => entry.id === tab.id);
      if (existingTab) {
        return { activeTab: tab.id };
      }

      return {
        tabs: [...state.tabs, tab],
        activeTab: tab.id,
      };
    }),

  openTabById: (tabId) =>
    set((state) => {
      const tab = getTabDefinition(tabId);
      if (!tab) {
        return state;
      }

      const existingTab = state.tabs.find((entry) => entry.id === tabId);
      if (existingTab) {
        return { activeTab: tabId };
      }

      return {
        tabs: [...state.tabs, tab],
        activeTab: tabId,
      };
    }),

  closeTab: (tabId) =>
    set((state) => {
      if (tabId === 'about') {
        return state;
      }

      const newTabs = state.tabs.filter((entry) => entry.id !== tabId);
      const nextActiveTab =
        state.activeTab === tabId ? newTabs[newTabs.length - 1]?.id || 'about' : state.activeTab;

      return {
        tabs: newTabs,
        activeTab: nextActiveTab,
      };
    }),

  setActiveTab: (tabId) =>
    set((state) => {
      const existingTab = state.tabs.find((entry) => entry.id === tabId);
      if (existingTab) {
        return { activeTab: tabId };
      }

      const tab = getTabDefinition(tabId);
      if (!tab) {
        return state;
      }

      return {
        tabs: [...state.tabs, tab],
        activeTab: tabId,
      };
    }),
}));
