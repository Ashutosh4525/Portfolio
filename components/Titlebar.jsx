import { VscMenu, VscLayoutSidebarLeft, VscLayoutSidebarLeftOff, VscLayoutPanel, VscLayoutPanelOff, VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { useUIStore } from '@/store/uiStore';
import Image from 'next/image';
import useMediaQuery from '@/app/MediaQuery';

export default function Titlebar() {
  const { setSidebarOpen, sidebarOpen, terminalOpen, toggleTerminal, toggleSidebar } = useUIStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="w-full h-10 flex justify-between items-center px-2 md:px-3 bg-[#323233] border-b border-gray-700 text-gray-400 gap-2 overflow-hidden shrink-0">
      <div className="flex items-center gap-2 md:gap-4 min-w-fit">
        <Image
          src="/vscode_icon.svg"
          alt="vscode"
          width={16}
          height={16}
          className="w-4 h-4 md:w-4 md:h-4"
        />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hover:text-white transition text-lg md:text-base"
          title="Toggle Sidebar"
        >
          <VscMenu />
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center min-w-0">
        <div className="border border-gray-600 bg-[#1e1e1e] text-center rounded px-3 py-1 truncate text-xs md:text-sm">
          <p className="truncate">Ashutosh Portfolio</p>
        </div>
      </div>

      {!isMobile && (
        <div className="flex items-center gap-1">
          <button className="hover:text-white transition p-1" title="Go Back">
            <VscArrowLeft size={18} />
          </button>
          <button className="hover:text-white transition p-1" title="Go Forward">
            <VscArrowRight size={18} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-1 min-w-fit">
        <button
          className="hover:text-white transition p-1"
          onClick={toggleSidebar}
          title={sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        >
          {sidebarOpen ? <VscLayoutSidebarLeft size={18} /> : <VscLayoutSidebarLeftOff size={18} />}
        </button>
        <button
          className="hover:text-white transition p-1"
          onClick={toggleTerminal}
          title={terminalOpen ? 'Close Terminal' : 'Open Terminal'}
        >
          {terminalOpen ? <VscLayoutPanel size={18} /> : <VscLayoutPanelOff size={18} />}
        </button>
      </div>
    </section>
  );
}
