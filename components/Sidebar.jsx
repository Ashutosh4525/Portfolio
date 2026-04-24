'use client'

import { useState } from 'react';
import useMediaQuery from '@/app/MediaQuery';
import { ContentVariantIcon, tabIconMap, TerminalModeIcon } from '@/components/SectionIcons';
import { useComponentStore } from '@/store/ComponentStore';
import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';

function Chevron({ open = true }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      {open ? <path d="m7 9 5 5 5-5" /> : <path d="m9 7 5 5-5 5" />}
    </svg>
  );
}

function SidebarSection({ title, open, onToggle, children, bottom = false }) {
  return (
    <div className={bottom ? 'mt-auto border-t px-2 py-3' : 'border-b px-2 py-2'} style={{ borderColor: 'var(--line)' }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-1.5 px-1 py-1 text-left text-[12px] font-medium uppercase tracking-[0.18em]"
        style={{ color: 'var(--text-main)' }}
      >
        <Chevron open={open} />
        <span>{title}</span>
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}

export default function Sidebar() {
  const { components } = useComponentStore();
  const { openTabById, activeTab } = useEditorStore();
  const { sidebarOpen, setSidebarOpen, layoutMode, setLayoutMode, contentVariant, setContentVariant } =
    useUIStore();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [appearanceOpen, setAppearanceOpen] = useState(false);

  const handleSelect = (componentId) => {
    openTabById(componentId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const sidebarContent = (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="border-b px-3 py-3" style={{ borderColor: 'var(--line)' }}>
        <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>
          Explorer
        </p>
      </div>

      <SidebarSection title="Portfolio" open={portfolioOpen} onToggle={() => setPortfolioOpen((value) => !value)}>
        <div className="space-y-0.5">
          {components.map((component) => {
            const isActive = activeTab === component.id;
            const Icon = tabIconMap[component.icon];

            return (
              <button
                key={component.id}
                onClick={() => handleSelect(component.id)}
                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[13px] transition duration-200 hover:translate-x-1"
                style={
                  isActive
                    ? { backgroundColor: 'var(--accent-soft)', color: 'var(--text-strong)', outline: '1px solid var(--accent)' }
                    : { color: 'var(--text-main)' }
                }
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="truncate">{component.name}</span>
              </button>
            );
          })}
        </div>
      </SidebarSection>

      <SidebarSection
        title="Appearance"
        open={appearanceOpen}
        onToggle={() => setAppearanceOpen((value) => !value)}
        bottom
      >
        <div className="space-y-3 px-1 pt-1">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
              Layout
            </label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {['editor', 'showcase', 'zen'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setLayoutMode(mode)}
                  className="flex h-11 items-center justify-center rounded border transition"
                  style={
                    layoutMode === mode
                      ? {
                          borderColor: 'var(--accent)',
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--text-strong)',
                        }
                      : {
                          borderColor: 'var(--line)',
                          backgroundColor: 'var(--tabs-bg)',
                          color: 'var(--text-muted)',
                        }
                  }
                  title={mode[0].toUpperCase() + mode.slice(1)}
                >
                  <TerminalModeIcon mode={mode} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
              Content
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                ['classic', 'Original'],
                ['reference', 'Inspired'],
              ].map(([variant, label]) => (
                <button
                  key={variant}
                  onClick={() => setContentVariant(variant)}
                  className="flex h-11 items-center justify-center gap-2 rounded border text-[12px] transition"
                  style={
                    contentVariant === variant
                      ? {
                          borderColor: 'var(--accent)',
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--text-strong)',
                        }
                      : {
                          borderColor: 'var(--line)',
                          backgroundColor: 'var(--tabs-bg)',
                          color: 'var(--text-muted)',
                        }
                  }
                  title={label}
                >
                  <ContentVariantIcon variant={variant} className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SidebarSection>
    </div>
  );

  if (isMobile) {
    if (!sidebarOpen) return null;

    return (
      <div className="fixed inset-0 z-40 flex">
        <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
        <aside
          className="relative h-full w-72 border-r shadow-2xl"
          style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--sidebar-border)', color: 'var(--text-main)' }}
        >
          {sidebarContent}
        </aside>
      </div>
    );
  }

  return (
    <aside
      className={`overflow-hidden border-r transition-all duration-300 ${
        sidebarOpen ? (layoutMode === 'showcase' ? 'w-72 xl:w-80' : 'w-64') : 'w-0'
      }`}
      style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--sidebar-border)', color: 'var(--text-main)' }}
    >
      {sidebarOpen && sidebarContent}
    </aside>
  );
}
