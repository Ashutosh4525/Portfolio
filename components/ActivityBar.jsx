'use client'

import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';
import { tabIconMap } from '@/components/SectionIcons';

const items = [
  { id: 'about', title: 'README.md', icon: 'about' },
  { id: 'skills', title: 'skills.json', icon: 'skills' },
  { id: 'projects', title: 'projects.ts', icon: 'projects' },
  { id: 'contact', title: 'contact.yaml', icon: 'contact' },
];

export default function ActivityBar() {
  const { activeTab, openTabById } = useEditorStore();
  const { setSidebarOpen } = useUIStore();

  const handleSectionClick = (tabId) => {
    openTabById(tabId);
    setSidebarOpen(true);
  };

  return (
    <aside
      className="hidden w-12 shrink-0 border-r md:flex md:flex-col md:items-center md:justify-between"
      style={{ backgroundColor: 'var(--activitybar-bg)', borderColor: 'var(--line)' }}
    >
      <div className="flex w-full flex-col items-center py-2">
        {items.map((item) => {
          const Icon = tabIconMap[item.icon];
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className="relative flex h-12 w-full items-center justify-center transition"
              style={{ color: isActive ? 'var(--text-strong)' : 'var(--text-muted)' }}
              title={item.title}
            >
              {isActive && (
                <span
                  className="absolute left-0 top-2 h-8 w-0.5 rounded-r"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      <div className="pb-3 text-[10px] uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>
        DEV
      </div>
    </aside>
  );
}
