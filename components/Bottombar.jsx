'use client'

import useMediaQuery from '@/app/MediaQuery';
import { ContentVariantIcon, TerminalModeIcon } from '@/components/SectionIcons';
import { useEditorStore } from '@/store/EditorStore';
import { themePresets, useUIStore } from '@/store/uiStore';

const modeMeta = {
  editor: 'Editor',
  showcase: 'Showcase',
  zen: 'Zen',
};

const contentMeta = {
  classic: 'Original',
  reference: 'Inspired',
};

function ThemeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="M12 3a9 9 0 1 0 9 9c0-.6-.4-1-1-1h-2.2a2.3 2.3 0 0 1-2.3-2.3c0-1.1.8-2 1.8-2.2 1.4-.3 2.7-1.2 2.7-3A8.5 8.5 0 0 0 12 3Z" />
      <circle cx="7.5" cy="10" r=".9" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12.8" cy="15.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5">
      <path d="m7 8 4 4-4 4" />
      <path d="M13 16h4" />
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
    </svg>
  );
}

function StatusItem({ icon: Icon, label, value, compact = false, onClick }) {
  const content = (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded px-1.5 py-0.5 transition hover:bg-black/10">
      <Icon />
      {!compact && <span>{label}</span>}
      <span className="font-medium">{value}</span>
    </span>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left">
        {content}
      </button>
    );
  }

  return content;
}

export default function Bottombar() {
  const { activeTab } = useEditorStore();
  const {
    terminalOpen,
    toggleTerminal,
    layoutMode,
    setLayoutMode,
    contentVariant,
    toggleContentVariant,
    themeId,
    setThemeId,
  } = useUIStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div
      className="flex h-8 w-full items-center justify-between gap-3 overflow-x-auto px-2 text-[11px] md:px-3"
      style={{ backgroundColor: 'var(--status-bg)', color: 'var(--status-fg)' }}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="truncate rounded px-1.5 py-0.5">{activeTab}.workspace</span>
        {!isMobile && <span className="truncate opacity-90">Ready</span>}
      </div>

      <div className="flex items-center gap-1.5">
        <label className="inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 hover:bg-black/10">
          <ThemeIcon />
          {!isMobile && <span>Theme</span>}
          <select
            aria-label="Choose theme"
            value={themeId}
            onChange={(event) => setThemeId(event.target.value)}
            className="status-select rounded px-1.5 py-0.5 text-[11px]"
          >
            {Object.entries(themePresets).map(([id, theme]) => (
              <option key={id} value={id}>
                {theme.label}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={() =>
            setLayoutMode(layoutMode === 'editor' ? 'showcase' : layoutMode === 'showcase' ? 'zen' : 'editor')
          }
          className="text-left"
        >
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded px-1.5 py-0.5 transition hover:bg-black/10">
            <TerminalModeIcon mode={layoutMode} className="h-3.5 w-3.5" />
            {!isMobile && <span>Mode</span>}
            <span className="font-medium">{modeMeta[layoutMode]}</span>
          </span>
        </button>
        <button onClick={toggleContentVariant} className="text-left">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded px-1.5 py-0.5 transition hover:bg-black/10">
            <ContentVariantIcon variant={contentVariant} className="h-3.5 w-3.5" />
            {!isMobile && <span>Content</span>}
            <span className="font-medium">{contentMeta[contentVariant]}</span>
          </span>
        </button>
        <StatusItem
          icon={TerminalIcon}
          label="Panel"
          value={terminalOpen ? 'Terminal' : 'Editor'}
          compact={isMobile}
          onClick={toggleTerminal}
        />
      </div>
    </div>
  );
}
