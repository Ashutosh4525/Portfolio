'use client'

import { useUIStore } from '@/store/uiStore';
import { useEditorStore } from '@/store/EditorStore';
import { useComponentStore } from '@/store/ComponentStore';
import useMediaQuery from '@/app/MediaQuery';

export default function Sidebar() {
  const { sidebarOpen } = useUIStore();
  const { openTab } = useEditorStore();
  const { components } = useComponentStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <aside
      className={`bg-[#252526] h-screen text-gray-200 transition-all duration-300 overflow-hidden border-r border-gray-700 ${
        sidebarOpen ? (isMobile ? 'w-48' : 'w-56') : 'w-0'
      }`}
    >
      {sidebarOpen && (
        <div className="p-3 md:p-4 h-full overflow-y-auto flex flex-col">
          <h2 className="font-semibold mb-4 text-white text-sm md:text-base">Explorer</h2>

          <div className="flex flex-col gap-1 flex-1">
            <p className="text-xs text-gray-500 uppercase font-bold px-2 mb-2">Components</p>
            {components.map((comp) => (
              <button
                key={comp.id}
                onClick={() =>
                  openTab({
                    id: comp.id,
                    name: comp.name,
                    component: comp.component,
                  })
                }
                className="hover:bg-[#333] px-2 py-1.5 md:py-2 rounded text-left text-xs md:text-sm transition duration-200 truncate"
              >
                📄 {comp.name}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-3 mt-4 text-xs text-gray-500">
            <p className="truncate">{components.length} components</p>
          </div>
        </div>
      )}
    </aside>
  );
}
