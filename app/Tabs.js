'use client'

import { useEditorStore } from '@/store/EditorStore';
import { VscClose } from 'react-icons/vsc';

export default function Tabs() {
  const { tabs, activeTab, setActiveTab, closeTab } = useEditorStore();

  return (
    <div className="flex items-center bg-[#1e1e1e] border-b border-gray-700 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm cursor-pointer border-b-2 transition-colors whitespace-nowrap ${
            activeTab === tab.id
              ? 'border-blue-500 text-white bg-[#252526]'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          {tab.name}
          {tabs.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className="hover:text-red-400"
            >
              <VscClose size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
