import { create } from 'zustand';

export const useEditorStore = create((set) => ({
  tabs: [
    { id: 'skills', name: 'Skills', component: null, content: '' },
    { id: 'projects', name: 'Projects', component: null, content: '' },
    { id: 'contact', name: 'Contact', component: null, content: '' },
    { id: 'terminal', name: 'Terminal', component: null, content: '' },
  ],
  activeTab: 'skills',
  
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
  
  closeTab: (tabId) => set((state) => ({
    tabs: state.tabs.filter(t => t.id !== tabId),
    activeTab: state.activeTab === tabId 
      ? state.tabs[0]?.id || 'skills'
      : state.activeTab
  })),
  
  setActiveTab: (tabId) => set({ activeTab: tabId }),
}));
