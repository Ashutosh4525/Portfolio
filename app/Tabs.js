'use client'

import { useEditorStore } from '@/store/EditorStore';
import { VscClose } from 'react-icons/vsc';

export default function Tabs() {
  const { tabs, activeTab, setActiveTab, closeTab } = useEditorStore();

  if (tabs.length === 0) {
    return (
      <div className="w-full h-auto bg-[#1e1e1e] border-b border-gray-700 flex items-center justify-center py-8 text-gray-400">
        <p className="text-sm">Click on a component in the sidebar to open it</p>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-[#1e1e1e] border-b border-gray-700 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-5 py-4 text-sm cursor-pointer border-b-2 transition-all whitespace-nowrap group ${
            activeTab === tab.id
              ? 'border-blue-500 text-white bg-[#252526]'
              : 'border-transparent text-gray-400 hover:text-white hover:bg-[#252526]'
          }`}
        >
          📄 {tab.name}
          {tab.id !== 'about' && tabs.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className="ml-1 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
              title="Close tab"
            >
              <VscClose size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

