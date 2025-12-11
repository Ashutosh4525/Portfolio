'use client'

import Tabs from '@/app/Tabs';
import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';
import useMediaQuery from '@/app/MediaQuery';
import Terminal from '@/components/Terminal';

export default function Editor() {
  const { activeTab, tabs } = useEditorStore();
  const { terminalOpen } = useUIStore();
  const isMobile = useMediaQuery('(max-width: 800px)');
  const activeFile = tabs.find((t) => t.id === activeTab);

  if (isMobile && activeTab === 'terminal') {
    return (
      <div className="p-4 bg-black text-green-400 h-full overflow-auto">
        <Tabs />
        <Terminal mobileMode={true} hidden={false} />
      </div>
    );
  }

  return (
    <div className={`${terminalOpen ? 'h-[70%]' : 'h-full'} flex-1 bg-[#1e1e1e] text-gray-300 overflow-auto flex flex-col transition-all duration-300`}>
      <Tabs />
      <div className="flex-1 p-4 overflow-auto">
        {activeFile?.component ? (
          <div className="w-full h-full">
            {activeFile.component}
          </div>
        ) : (
          <pre className="whitespace-pre text-sm text-gray-400">
            {activeFile?.content || 'Select a component to view'}
          </pre>
        )}
      </div>
    </div>
  );
}
