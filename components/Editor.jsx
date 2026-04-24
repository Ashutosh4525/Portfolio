'use client'

import Tabs from '@/app/Tabs';
import useMediaQuery from '@/app/MediaQuery';
import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';

export default function Editor() {
  const { activeTab, tabs } = useEditorStore();
  const { terminalOpen, layoutMode, contentVariant } = useUIStore();
  const activeFile = tabs.find((tab) => tab.id === activeTab);
  const isZen = layoutMode === 'zen';
  const isMobile = useMediaQuery('(max-width: 768px)');

  const contentPadding = isZen
    ? isMobile
      ? '16px 14px 32px'
      : '32px 40px 48px'
    : isMobile
      ? '12px 10px 24px'
      : '20px 20px 32px';

  return (
    <div
      className={`flex-1 overflow-hidden transition-all duration-300 ${
        terminalOpen && layoutMode !== 'showcase' ? 'min-h-[50%]' : 'h-full'
      }`}
      style={{ color: 'var(--text-main)' }}
    >
      <Tabs />

      <div
        className={`${isZen ? 'zen-surface' : 'editor-surface'} flex h-full flex-1 overflow-auto`}
        style={{ padding: contentPadding }}
      >
        {activeFile?.component ? (
          <div
            key={`${activeTab}-${contentVariant}-${layoutMode}`}
            className={`editor-viewport mx-auto w-full ${
              isZen
                ? 'max-w-5xl'
                : layoutMode === 'showcase'
                  ? 'max-w-6xl'
                  : 'max-w-5xl xl:max-w-6xl'
            }`}
          >
            {activeFile.component}
          </div>
        ) : null}
      </div>
    </div>
  );
}
