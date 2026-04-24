'use client'

import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';
import { tabIconMap } from '@/components/SectionIcons';

export default function Tabs() {
  const { tabs, activeTab, setActiveTab, closeTab } = useEditorStore();
  const { layoutMode } = useUIStore();

  if (tabs.length === 0) {
    return (
      <div
        className="flex w-full items-center justify-center border-b py-6 text-sm"
        style={{ backgroundColor: 'var(--tabs-bg)', borderColor: 'var(--line)', color: 'var(--text-muted)' }}
      >
        Choose a file from the explorer to start browsing the portfolio.
      </div>
    );
  }

  return (
    <div
      className={`flex items-center overflow-x-auto border-b ${layoutMode === 'zen' ? 'px-4' : 'px-0'}`}
      style={{ backgroundColor: 'var(--tabs-bg)', borderColor: 'var(--line)' }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tabIconMap[tab.icon];

        return (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            data-active={isActive}
            className="tab-glow group relative flex h-9 cursor-pointer items-center gap-2 border-r px-4 text-[12px] transition duration-200 hover:-translate-y-[1px]"
            style={{
              borderColor: 'var(--line)',
              backgroundColor: isActive ? 'var(--tab-active-bg)' : 'transparent',
              color: isActive ? 'var(--text-strong)' : 'var(--text-muted)',
              minWidth: 'fit-content',
            }}
          >
            {isActive && (
              <span
                className="absolute left-0 right-0 top-0 h-[1.5px]"
                style={{ backgroundColor: 'var(--accent)' }}
              />
            )}
            {Icon && <Icon className="h-3.5 w-3.5" />}
            <span>{tab.name}</span>
            {tab.id !== 'about' && tabs.length > 1 && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  closeTab(tab.id);
                }}
                className="rounded px-1 opacity-0 transition group-hover:opacity-100"
                style={{ color: 'var(--text-muted)' }}
                title="Close tab"
              >
                x
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
