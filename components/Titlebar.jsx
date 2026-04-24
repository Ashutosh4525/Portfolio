'use client'

import Image from 'next/image';
import useMediaQuery from '@/app/MediaQuery';
import { ContentVariantIcon, TerminalModeIcon } from '@/components/SectionIcons';
import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';

const modeLabels = {
  editor: 'Editor',
  showcase: 'Showcase',
  zen: 'Zen',
};

const contentLabels = {
  classic: 'Original',
  reference: 'Inspired',
};

function SidebarIcon({ closed = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.75" />
      <path d="M9 4.5v15" />
      {closed && <path d="M6.3 12h2.8" />}
    </svg>
  );
}

function PanelIcon({ open = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
      <rect x="4" y="4.5" width="16" height="15" rx="1.75" />
      <path d="M4 14h16" />
      {open ? <path d="m9 10 3 3 3-3" /> : <path d="m9 13 3-3 3 3" />}
    </svg>
  );
}

export default function Titlebar() {
  const { activeTab } = useEditorStore();
  const {
    sidebarOpen,
    terminalOpen,
    toggleSidebar,
    toggleTerminal,
    layoutMode,
    setLayoutMode,
    contentVariant,
    setContentVariant,
  } =
    useUIStore();
  const isMobile = useMediaQuery('(max-width: 920px)');

  return (
    <section
      className="flex h-12 w-full items-center justify-between gap-3 border-b px-3 text-sm md:px-4"
      style={{
        backgroundColor: 'var(--titlebar-bg)',
        borderColor: 'var(--titlebar-border)',
        color: 'var(--text-main)',
      }}
    >
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src="/vscode_icon.svg"
          alt="VS Code inspired layout"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
        <button
          onClick={toggleSidebar}
          className="inline-flex h-8 items-center justify-center rounded px-2 transition"
          style={{ color: 'var(--text-main)' }}
          title="Toggle Sidebar"
        >
          <SidebarIcon closed={!sidebarOpen} />
        </button>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[13px]" style={{ color: 'var(--text-strong)' }}>
            Ashutosh Portfolio
          </p>
          <p className="truncate text-[11px]" style={{ color: 'var(--text-muted)' }}>
            {activeTab}.workspace
          </p>
        </div>
      </div>

      <div className="hidden min-w-0 flex-1 justify-center lg:flex">
        <div
          className="flex h-8 w-full max-w-xl items-center rounded-md border px-3 text-[12px]"
          style={{
            backgroundColor: 'var(--tabs-bg)',
            borderColor: 'var(--line)',
            color: 'var(--text-muted)',
          }}
        >
          <span className="truncate">portfolio / src / {activeTab}</span>
          <span
            className="floating-badge ml-auto inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]"
            style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
          >
            <TerminalModeIcon mode={layoutMode} className="h-3 w-3" />
            {modeLabels[layoutMode]}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!isMobile && (
          <>
            <div
              className="flex items-center rounded-md border p-0.5"
              style={{ borderColor: 'var(--line)', backgroundColor: 'var(--tabs-bg)' }}
            >
              {Object.entries(modeLabels).map(([mode, label]) => (
                <button
                  key={mode}
                  onClick={() => setLayoutMode(mode)}
                  className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] transition"
                  style={
                    layoutMode === mode
                      ? { backgroundColor: 'var(--tab-active-bg)', color: 'var(--text-strong)' }
                      : { color: 'var(--text-muted)' }
                  }
                >
                  <TerminalModeIcon mode={mode} className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
            <div
              className="flex items-center rounded-md border p-0.5"
              style={{ borderColor: 'var(--line)', backgroundColor: 'var(--tabs-bg)' }}
            >
              {Object.entries(contentLabels).map(([variant, label]) => (
                <button
                  key={variant}
                  onClick={() => setContentVariant(variant)}
                  className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] transition"
                  style={
                    contentVariant === variant
                      ? { backgroundColor: 'var(--tab-active-bg)', color: 'var(--text-strong)' }
                      : { color: 'var(--text-muted)' }
                  }
                  title={`${label} content`}
                >
                  <ContentVariantIcon variant={variant} className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </>
        )}
        <button
          className="inline-flex h-8 items-center gap-2 rounded border px-2.5 text-[12px] transition"
          style={{
            borderColor: 'var(--line)',
            backgroundColor: terminalOpen ? 'var(--accent-soft)' : 'transparent',
            color: terminalOpen ? 'var(--accent-strong)' : 'var(--text-main)',
          }}
          onClick={toggleTerminal}
          title={terminalOpen ? 'Close Terminal' : 'Open Terminal'}
        >
          <PanelIcon open={terminalOpen} />
          <span className="hidden md:inline">{terminalOpen ? 'Panel' : 'Terminal'}</span>
        </button>
        {isMobile && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setContentVariant(contentVariant === 'classic' ? 'reference' : 'classic')}
              className="inline-flex h-8 items-center gap-1.5 rounded border px-2.5 text-[12px] transition"
              style={{ borderColor: 'var(--line)', color: 'var(--text-main)' }}
            >
              <ContentVariantIcon variant={contentVariant} className="h-3.5 w-3.5" />
              {contentLabels[contentVariant]}
            </button>
            <button
              onClick={() => setLayoutMode(layoutMode === 'zen' ? 'editor' : 'zen')}
              className="inline-flex h-8 items-center gap-1.5 rounded border px-2.5 text-[12px] transition"
              style={{ borderColor: 'var(--line)', color: 'var(--text-main)' }}
            >
              <TerminalModeIcon mode={layoutMode === 'zen' ? 'editor' : 'zen'} className="h-3.5 w-3.5" />
              {layoutMode === 'zen' ? 'Exit Zen' : 'Zen'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
