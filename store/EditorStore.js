import { create } from 'zustand';
import About from '@/components/About';

export const useEditorStore = create((set) => ({
  tabs: [
    { id: 'about', name: 'About', component: <About /> }
  ],
  activeTab: 'about',
  
  openTab: (tab) => set((state) => {
    const existingTab = state.tabs.find(t => t.id === tab.id);
    if (existingTab) {
      return { activeTab: tab.id };
    }
    return { 
      tabs: [...state.tabs, tab],
      activeTab: tab.id 
    };
  }),
  
  closeTab: (tabId) => set((state) => {
    // Don't allow closing the About tab
    if (tabId === 'about') return state;
    
    const newTabs = state.tabs.filter(t => t.id !== tabId);
    return {
      tabs: newTabs,
      activeTab: state.activeTab === tabId 
        ? newTabs.find(t => t.id !== tabId)?.id || 'about'
        : state.activeTab
    };
  }),
  
  setActiveTab: (tabId) => set({ activeTab: tabId }),
}));
