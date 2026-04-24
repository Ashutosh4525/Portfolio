'use client'

import ActivityBar from '@/components/ActivityBar';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import Terminal from '@/components/Terminal';
import Titlebar from '@/components/Titlebar';
import Bottombar from '@/components/Bottombar';
import { themePresets, useUIStore } from '@/store/uiStore';
import useMediaQuery from '@/app/MediaQuery';

function ZenToolbar() {
  const { layoutMode, setLayoutMode } = useUIStore();

  if (layoutMode !== 'zen') {
    return null;
  }

  return (
    <div className="pointer-events-none absolute right-5 top-4 z-30">
      <div
        className="pointer-events-auto flex items-center gap-2 rounded-md border px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--titlebar-bg)' }}
      >
        <button
          onClick={() => setLayoutMode('editor')}
          className="rounded border border-transparent px-2 py-1 text-xs transition"
          style={{ color: 'var(--text-main)' }}
        >
          Exit Zen
        </button>
      </div>
    </div>
  );
}

export default function UIWrapper() {
  const { layoutMode, themeId } = useUIStore();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = themePresets[themeId] ?? themePresets.darkPlus;
  const showChrome = layoutMode !== 'zen';
  const isZen = layoutMode === 'zen';

  return (
    <div className="app-shell flex h-screen w-screen flex-col overflow-hidden" style={theme.vars}>
      {!isZen && <Titlebar />}

      <div
        className="relative flex flex-1 overflow-hidden"
        style={{ padding: isZen ? 0 : isMobile ? '0' : '0' }}
      >
        <ZenToolbar />
        <div
          className={`workspace-frame flex w-full flex-1 overflow-hidden ${
            isZen
              ? 'border-0 shadow-none'
              : 'border shadow-[0_18px_50px_rgba(0,0,0,0.28)]'
          }`}
          style={{ borderColor: 'var(--window-border)' }}
        >
          {showChrome && <ActivityBar />}
          {layoutMode !== 'zen' && <Sidebar />}

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <Editor />
            {!isZen && layoutMode !== 'showcase' && <Terminal />}
          </div>

          {layoutMode === 'showcase' && !isZen && <Terminal docked />}
        </div>
      </div>

      {!isZen && <Bottombar />}
    </div>
  );
}
